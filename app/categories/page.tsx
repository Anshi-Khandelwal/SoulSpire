import { categories } from "@/lib/data"
import CategoryCard from "@/components/category-card"

export default function CategoriesPage() {
  return (
    <main className="p-4 pb-20">
      <h1 className="text-2xl font-bold text-white mb-6">Categories</h1>

      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </main>
  )
}
