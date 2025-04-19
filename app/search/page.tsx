"use client"

import { useState } from "react"
import { books, categories } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchIcon } from "lucide-react"
import BookCard from "@/components/book-card"
import CategoryCard from "@/components/category-card"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter books based on search query
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <main className="p-4 pb-20">
      <h1 className="text-2xl font-bold text-white mb-6">Search</h1>

      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Search books, authors, categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-blue-900/20 border-blue-900/50 text-white"
        />
      </div>

      <Tabs defaultValue="books">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="books">
          {filteredBooks.length > 0 ? (
            <div className="book-grid">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 py-8">
              {searchQuery ? "No books found matching your search." : "Start typing to search for books."}
            </p>
          )}
        </TabsContent>

        <TabsContent value="categories">
          {filteredCategories.length > 0 ? (
            <div className="category-grid">
              {filteredCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 py-8">
              {searchQuery ? "No categories found matching your search." : "Start typing to search for categories."}
            </p>
          )}
        </TabsContent>
      </Tabs>
    </main>
  )
}
