import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { Inspiration } from "@/lib/types"

export default function InspirationCard({ inspiration }: { inspiration: Inspiration }) {
  // Create a fallback image URL with the title for Unsplash
  const imageUrl = inspiration.image
    ? inspiration.image
    : `https://source.unsplash.com/random/450x300/?inspiration,${encodeURIComponent(inspiration.title)}`

  return (
    <Card className="overflow-hidden border-0 bg-transparent">
      <div className="relative aspect-[3/2] overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={inspiration.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="bg-gradient-to-b from-blue-900/80 to-indigo-900/80 p-4 rounded-b-lg">
        <h3 className="text-lg font-semibold text-white mb-1">{inspiration.title}</h3>
        <p className="text-white/80 text-sm italic">{inspiration.quote}</p>
      </CardContent>
    </Card>
  )
}
