import { books, categories, quotes, inspirations } from "@/lib/data"
import BookCard from "@/components/book-card"
import CategoryCard from "@/components/category-card"
import QuoteCard from "@/components/quote-card"
import InspirationCard from "@/components/inspiration-card"
import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  // Get featured books (first 4)
  const featuredBooks = books.slice(0, 4)

  // Get featured categories (first 4)
  const featuredCategories = categories.slice(0, 4)

  // Get daily quotes (first 3)
  const dailyQuotes = quotes.slice(0, 3)

  // Get daily inspirations (first 3)
  const dailyInspirations = inspirations.slice(0, 3)

  // Ensure we have at least one valid quote
  const validQuote = dailyQuotes.length > 0 ? dailyQuotes[0] : null

  // Hero image path - use null if it doesn't exist
  const heroImagePath = "/hero-background.jpg"

  return (
    <main className="pb-20">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <Logo />
      </header>

      {/* Hero Section */}
      <section className="px-4 py-6">
        <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-6">
          <Image
            src={heroImagePath || "/placeholder.svg"}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple opacity-80"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-6">
            <h1 className="text-2xl font-bold text-white mb-2">Welcome to Soulspire</h1>
            <p className="text-white/90 mb-4">Discover books that inspire your soul</p>
            {/* Fixed: Added Link component to make the button navigate to categories page */}
            <Link href="/categories">
              <Button className="w-fit bg-white text-brand-purple hover:bg-white/90">Explore Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Inspiration (Horizontal Scroll) */}
      {dailyInspirations.length > 0 && (
        <section className="py-6">
          <div className="px-4 flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Daily Inspiration</h2>
            <Link href="/inspirations" className="text-sm text-brand-purple flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full px-4" // Added padding to ensure arrows are visible
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {dailyInspirations.map((inspiration) => (
                <CarouselItem key={inspiration.id} className="pl-2 md:pl-4 sm:basis-4/5 md:basis-1/2 lg:basis-1/3">
                  <InspirationCard inspiration={inspiration} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Fixed: Moved carousel controls outside and made them more visible */}
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="static translate-y-0 h-8 w-8 bg-brand-purple text-white hover:bg-brand-purple/80 border-0" />
              <CarouselNext className="static translate-y-0 h-8 w-8 bg-brand-purple text-white hover:bg-brand-purple/80 border-0" />
            </div>
          </Carousel>
        </section>
      )}

      {/* Featured Books */}
      {featuredBooks.length > 0 && (
        <section className="px-4 py-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Featured Books</h2>
            <Link href="/books" className="text-sm text-brand-purple flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="book-grid">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      {featuredCategories.length > 0 && (
        <section className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Categories</h2>
            <Link href="/categories" className="text-sm text-brand-purple flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="category-grid">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      )}

      {/* Daily Quotes */}
      {validQuote && (
        <section className="px-4 py-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Quote of the Day</h2>
            <Link href="/quotes" className="text-sm text-brand-purple flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <QuoteCard quote={validQuote} />
          </div>
        </section>
      )}
    </main>
  )
}
