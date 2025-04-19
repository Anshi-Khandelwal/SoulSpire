import { inspirations } from "@/lib/data"
import InspirationCard from "@/components/inspiration-card"

export default function InspirationsPage() {
  return (
    <main className="p-4 pb-20">
      <h1 className="text-2xl font-bold text-white mb-6">Daily Inspirations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {inspirations.map((inspiration) => (
          <InspirationCard key={inspiration.id} inspiration={inspiration} />
        ))}
      </div>
    </main>
  )
}
