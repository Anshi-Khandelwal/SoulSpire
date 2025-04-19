import Image from "next/image"
import type { Quote } from "@/lib/types"
import Link from "next/link"

export default function QuoteCard({ quote }: { quote: Quote }) {
  // Create a fallback image URL with the quote text for Unsplash
  const imageUrl = quote.backgroundImage
    ? quote.backgroundImage
    : `https://source.unsplash.com/random/600x900/?inspiration,quote,${encodeURIComponent(quote.text.substring(0, 10))}`

  return (
    <Link href={`/quotes/${quote.id}`} className="block">
      <div className="relative quote-card overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt=""
          fill
          className="object-cover brightness-75"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/30">
          <p className="text-white text-center font-medium text-lg drop-shadow-md">{quote.text}</p>
          {quote.author && <p className="text-white/80 text-center mt-2 text-sm">- {quote.author}</p>}
        </div>
      </div>
    </Link>
  )
}
