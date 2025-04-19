import { quotes } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Share2, Download } from "lucide-react"
import QuoteCard from "@/components/quote-card"

export default function QuotePage({ params }: { params: { id: string } }) {
  const quote = quotes.find((q) => q.id === params.id)

  if (!quote) {
    notFound()
  }

  // Create a fallback image URL with the quote text for Unsplash
  const imageUrl = quote.backgroundImage
    ? quote.backgroundImage
    : `https://source.unsplash.com/random/1200x800/?inspiration,quote,${encodeURIComponent(quote.text.substring(0, 10))}`

  return (
    <main className="pb-20">
      <div className="relative h-screen max-h-[80vh]">
        <Image src={imageUrl || "/placeholder.svg"} alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8">
          <p className="text-white text-center font-medium text-2xl md:text-3xl drop-shadow-md mb-4">{quote.text}</p>
          {quote.author && <p className="text-white/90 text-center text-lg">- {quote.author}</p>}
        </div>
      </div>

      <div className="p-4 flex justify-between">
        <Button variant="outline" className="border-brand-purple text-brand-purple">
          <Heart className="w-4 h-4 mr-2" /> Save
        </Button>
        <Button variant="outline" className="border-brand-purple text-brand-purple">
          <Share2 className="w-4 h-4 mr-2" /> Share
        </Button>
        <Button variant="outline" className="border-brand-purple text-brand-purple">
          <Download className="w-4 h-4 mr-2" /> Download
        </Button>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">More Like This</h2>
        <div className="grid grid-cols-1 gap-4">
          {quotes
            .filter((q) => q.id !== quote.id)
            .slice(0, 2)
            .map((q) => (
              <QuoteCard key={q.id} quote={q} />
            ))}
        </div>
      </div>
    </main>
  )
}
