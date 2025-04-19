import { quotes } from "@/lib/data"
import QuoteCard from "@/components/quote-card"

export default function QuotesPage() {
  return (
    <main className="p-4 pb-20">
      <h1 className="text-2xl font-bold text-white mb-6">Daily Inspiration</h1>

      <div className="grid grid-cols-1 gap-4">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </main>
  )
}
