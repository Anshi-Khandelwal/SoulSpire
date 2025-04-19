import Link from "next/link"
import Image from "next/image"
import type { Book } from "@/lib/types"

export default function BookCard({ book }: { book: Book }) {
  // Create a fallback image URL with the book title for Unsplash
  const imageUrl = book.coverImage
    ? book.coverImage
    : `https://source.unsplash.com/random/300x450/?book,${encodeURIComponent(book.title)}`

  return (
    <Link href={`/books/${book.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg aspect-[2/3] shadow-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
      </div>
      <h3 className="mt-2 text-sm font-medium line-clamp-2 text-white">{book.title}</h3>
      <p className="text-xs text-gray-400">{book.author}</p>
    </Link>
  )
}
