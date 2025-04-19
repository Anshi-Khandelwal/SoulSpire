export interface Book {
  id: string
  title: string
  author: string
  coverImage: string | null
  description: string
  categories: string[]
  rating?: number
  pages?: number
  publishedDate?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string | null
}

export interface Quote {
  id: string
  text: string
  author?: string
  backgroundImage: string | null
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string | null
  bio?: string
  achievements: Achievement[]
  currentChallenges: UserChallenge[]
  completedChallenges: UserChallenge[]
  readingStats: {
    booksRead: number
    pagesRead: number
    readingStreak: number
    totalReadingTime: number // in minutes
  }
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: string
  read: boolean
}

export interface Conversation {
  id: string
  participants: string[]
  lastMessage: Message
  unreadCount: number
}

export interface Inspiration {
  id: string
  title: string
  quote: string
  image: string | null
}

export interface Challenge {
  id: string
  title: string
  description: string
  icon: string
  type: "books" | "categories" | "pages" | "time" | "streak"
  target: number
  reward: {
    points: number
    achievement?: string
  }
  duration?: {
    days: number
    startDate?: string
  }
  category?: string
}

export interface UserChallenge extends Challenge {
  progress: number
  startDate: string
  endDate: string
  completed: boolean
  completedDate?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  dateEarned: string
  level?: "bronze" | "silver" | "gold" | "platinum"
  points: number
}
