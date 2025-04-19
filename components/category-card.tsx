import Link from "next/link"
import Image from "next/image"
import type { Category } from "@/lib/types"

export default function CategoryCard({ category }: { category: Category }) {
  // Create a fallback image URL with the category name for Unsplash
  const imageUrl = category.image
    ? category.image
    : `https://source.unsplash.com/random/400x400/?books,${encodeURIComponent(category.name)}`

  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="relative overflow-hidden rounded-lg aspect-square shadow-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover brightness-75"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 flex items-center justify-center p-2">
          <h3 className="text-white font-semibold text-center text-lg drop-shadow-md">{category.name}</h3>
        </div>
      </div>
    </Link>
  )
}
