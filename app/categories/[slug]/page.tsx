import { getCategoryBySlug, getBooksByCategory } from "@/lib/data"
import BookCard from "@/components/book-card"
import { notFound } from "next/navigation"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug)

  if (!category) {
    notFound()
  }

  const books = getBooksByCategory(params.slug)

  return (
    <main className="p-4 pb-20">
      <h1 className="text-2xl font-bold text-white mb-6">{category.name}</h1>

      {books.length > 0 ? (
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-white/70">No books found in this category.</p>
      )}
    </main>
  )
}
