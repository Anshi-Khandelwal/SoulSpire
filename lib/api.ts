"use server"

import { books, categories, quotes, messages, conversations } from "./data"
import { revalidatePath } from "next/cache"

// Books API
export async function getBooks() {
  // In a real app, you would fetch from a database
  return books
}

export async function getBookById(id: string) {
  return books.find((book) => book.id === id)
}

export async function getBooksByCategory(categorySlug: string) {
  return books.filter((book) => book.categories.includes(categorySlug))
}

// Categories API
export async function getCategories() {
  return categories
}

export async function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}

// Quotes API
export async function getQuotes() {
  return quotes
}

export async function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

// Messages API
export async function getConversations(userId: string) {
  return conversations.filter((conversation) => conversation.participants.includes(userId))
}

export async function getMessages(conversationId: string) {
  // In a real app, you would filter by conversation ID
  return messages
}

export async function sendMessage(conversationId: string, senderId: string, content: string) {
  // In a real app, you would add the message to the database
  const newMessage = {
    id: `msg-${Date.now()}`,
    senderId,
    receiverId: conversations.find((c) => c.id === conversationId)?.participants.find((p) => p !== senderId) || "",
    content,
    timestamp: new Date().toISOString(),
    read: false,
  }

  // Update the conversation's last message
  const conversation = conversations.find((c) => c.id === conversationId)
  if (conversation) {
    conversation.lastMessage = newMessage
  }

  // Add the message to the messages array
  messages.push(newMessage)

  // Revalidate the messages page
  revalidatePath(`/messages/${conversationId}`)

  return newMessage
}
