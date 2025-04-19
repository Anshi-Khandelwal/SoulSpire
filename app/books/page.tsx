import { books } from "@/lib/data"
import BookCard from "@/components/book-card"

export default function BooksPage() {
  return (
    <main className="p-4 pb-20">
      <h1 className="text-2xl font-bold text-white mb-6">All Books</h1>

      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  )
}
