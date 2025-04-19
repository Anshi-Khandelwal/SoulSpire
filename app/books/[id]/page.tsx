import { getBookById } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Share2, Star } from "lucide-react"

export default function BookPage({ params }: { params: { id: string } }) {
  const book = getBookById(params.id)

  if (!book) {
    notFound()
  }

  // Create a fallback image URL with the book title for Unsplash
  const coverImageUrl = book.coverImage
    ? book.coverImage
    : `https://source.unsplash.com/random/300x450/?book,${encodeURIComponent(book.title)}`

  return (
    <main className="pb-20">
      <div className="relative h-64 bg-gradient-to-b from-brand-blue to-brand-purple">
        <div className="absolute bottom-0 left-0 w-full p-4 flex gap-4 transform translate-y-1/3">
          <div className="relative w-32 h-48 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={coverImageUrl || "/placeholder.svg"}
              alt={book.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 30vw, 128px"
            />
          </div>
          <div className="pt-16">
            <h1 className="text-xl font-bold text-white">{book.title}</h1>
            <p className="text-white/80">{book.author}</p>
            <div className="flex items-center mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(book.rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                />
              ))}
              <span className="text-white/80 text-sm ml-2">{book.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 p-4">
        <div className="flex justify-between mb-6">
          <Button className="flex-1 mr-2 bg-brand-purple hover:bg-brand-purple/90">
            <BookOpen className="w-4 h-4 mr-2" /> Read Now
          </Button>
          <Button variant="outline" className="mr-2 border-brand-purple text-brand-purple">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="border-brand-purple text-brand-purple">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-2">About the Book</h2>
          <p className="text-white/80">{book.description}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-900/30 p-3 rounded-lg">
            <p className="text-xs text-white/60">Pages</p>
            <p className="text-white font-medium">{book.pages}</p>
          </div>
          <div className="bg-blue-900/30 p-3 rounded-lg">
            <p className="text-xs text-white/60">Published</p>
            <p className="text-white font-medium">{new Date(book.publishedDate || "").getFullYear()}</p>
          </div>
          <div className="bg-blue-900/30 p-3 rounded-lg">
            <p className="text-xs text-white/60">Rating</p>
            <p className="text-white font-medium">{book.rating}/5</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {book.categories.map((category) => (
              <span key={category} className="px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-sm">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
