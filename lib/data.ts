import type {
  Book,
  Category,
  Quote,
  User,
  Conversation,
  Message,
  Inspiration,
  Challenge,
  Achievement,
  UserChallenge,
} from "./types"

export const books: Book[] = [
  {
    id: "1",
    title: "The Power of Now",
    author: "Eckhart Tolle",
    coverImage: "/book-covers/power-of-now.jpg",
    description: "A guide to spiritual enlightenment that emphasizes living in the present moment.",
    categories: ["spirituality", "self-help"],
    rating: 4.7,
    pages: 236,
    publishedDate: "1997-01-01",
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "/book-covers/atomic-habits.jpg",
    description: "An easy and proven way to build good habits and break bad ones.",
    categories: ["self-help", "productivity"],
    rating: 4.8,
    pages: 320,
    publishedDate: "2018-10-16",
  },
  {
    id: "3",
    title: "Mindfulness in Plain English",
    author: "Bhante Henepola Gunaratana",
    coverImage: "/book-covers/mindfulness.jpg",
    description: "A practical guide to Vipassana meditation practice.",
    categories: ["spirituality", "meditation"],
    rating: 4.6,
    pages: 224,
    publishedDate: "1992-01-01",
  },
  {
    id: "4",
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    coverImage: "/book-covers/four-agreements.jpg",
    description: "A practical guide to personal freedom based on ancient Toltec wisdom.",
    categories: ["spirituality", "self-help"],
    rating: 4.7,
    pages: 160,
    publishedDate: "1997-11-07",
  },
  {
    id: "5",
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverImage: "/book-covers/alchemist-new.jpg",
    description: "A fable about following your dreams and listening to your heart.",
    categories: ["fiction", "spirituality"],
    rating: 4.6,
    pages: 197,
    publishedDate: "1988-01-01",
  },
  {
    id: "6",
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    coverImage: "/book-covers/mans-search.jpg",
    description: "A memoir and psychological exploration of finding meaning in difficult circumstances.",
    categories: ["psychology", "memoir"],
    rating: 4.7,
    pages: 165,
    publishedDate: "1946-01-01",
  },
]

export const categories: Category[] = [
  {
    id: "1",
    name: "Fiction",
    slug: "fiction",
    image: "/categories/fiction-new.jpg",
  },
  {
    id: "2",
    name: "Self-Help",
    slug: "self-help",
    image: "/categories/self-help.jpg",
  },
  {
    id: "3",
    name: "Spirituality",
    slug: "spirituality",
    image: "/categories/spirituality.jpg",
  },
  {
    id: "4",
    name: "Psychology",
    slug: "psychology",
    image: "/categories/psychology.jpg",
  },
  {
    id: "5",
    name: "Business",
    slug: "business",
    image: "/categories/business.jpg",
  },
  {
    id: "6",
    name: "Meditation",
    slug: "meditation",
    image: "/categories/meditation.jpg",
  },
]

export const quotes: Quote[] = [
  {
    id: "1",
    text: "Never lose hope. Storms make people stronger and never last forever.",
    author: "Roy T. Bennett",
    backgroundImage: "/quotes/mountain-sunrise.jpg",
  },
  {
    id: "2",
    text: "Good vibes only",
    backgroundImage: "/quotes/good-vibes.jpg",
  },
  {
    id: "3",
    text: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln",
    backgroundImage: "/quotes/notebook.jpg",
  },
  {
    id: "4",
    text: "You got this",
    backgroundImage: "/quotes/you-got-this.jpg",
  },
  {
    id: "5",
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    backgroundImage: "/quotes/coffee.jpg",
  },
]

export const inspirations: Inspiration[] = [
  {
    id: "1",
    title: "Stay Positive",
    quote: "Your vibe attracts your tribe.",
    image: "/inspirations/positive.jpg",
  },
  {
    id: "2",
    title: "Embrace Change",
    quote: "The only constant in life is change.",
    image: "/inspirations/change.jpg",
  },
  {
    id: "3",
    title: "Find Your Purpose",
    quote: "The meaning of life is to find your gift. The purpose of life is to give it away.",
    image: "/inspirations/purpose.jpg",
  },
  {
    id: "4",
    title: "Practice Gratitude",
    quote: "Gratitude turns what we have into enough.",
    image: "/inspirations/gratitude.jpg",
  },
  {
    id: "5",
    title: "Be Present",
    quote: "Yesterday is history, tomorrow is a mystery, but today is a gift.",
    image: "/inspirations/present.jpg",
  },
]

// New challenges data
export const challenges: Challenge[] = [
  {
    id: "challenge-1",
    title: "Book Explorer",
    description: "Read 5 books from different categories",
    icon: "compass",
    type: "books",
    target: 5,
    reward: {
      points: 500,
      achievement: "achievement-1",
    },
  },
  {
    id: "challenge-2",
    title: "Spiritual Journey",
    description: "Read 3 books from the Spirituality category",
    icon: "lotus",
    type: "books",
    target: 3,
    category: "spirituality",
    reward: {
      points: 300,
    },
  },
  {
    id: "challenge-3",
    title: "Reading Marathon",
    description: "Read 1000 pages in 30 days",
    icon: "book-open",
    type: "pages",
    target: 1000,
    duration: {
      days: 30,
    },
    reward: {
      points: 1000,
      achievement: "achievement-2",
    },
  },
  {
    id: "challenge-4",
    title: "Consistent Reader",
    description: "Maintain a 7-day reading streak",
    icon: "flame",
    type: "streak",
    target: 7,
    reward: {
      points: 200,
    },
  },
  {
    id: "challenge-5",
    title: "Deep Dive",
    description: "Spend 10 hours reading",
    icon: "hourglass",
    type: "time",
    target: 600, // in minutes
    reward: {
      points: 400,
    },
  },
  {
    id: "challenge-6",
    title: "Self-Improvement Master",
    description: "Read 4 books from the Self-Help category",
    icon: "trophy",
    type: "books",
    target: 4,
    category: "self-help",
    reward: {
      points: 400,
      achievement: "achievement-3",
    },
  },
]

// Sample achievements
export const achievements: Achievement[] = [
  {
    id: "achievement-1",
    title: "Diverse Reader",
    description: "Read books from 5 different categories",
    icon: "award",
    dateEarned: "2023-03-15T10:30:00Z",
    level: "silver",
    points: 500,
  },
  {
    id: "achievement-2",
    title: "Page Turner",
    description: "Read 1000 pages in 30 days",
    icon: "book",
    dateEarned: "2023-02-28T14:20:00Z",
    level: "gold",
    points: 1000,
  },
  {
    id: "achievement-3",
    title: "Self-Improvement Guru",
    description: "Read 4 self-help books",
    icon: "zap",
    dateEarned: "2023-04-10T09:15:00Z",
    level: "bronze",
    points: 400,
  },
  {
    id: "achievement-4",
    title: "Bookworm",
    description: "Read 10 books",
    icon: "bookmark",
    dateEarned: "2023-01-20T16:45:00Z",
    level: "silver",
    points: 600,
  },
]

// Sample user challenges
export const userChallenges: UserChallenge[] = [
  {
    ...challenges[0],
    progress: 3,
    startDate: "2023-04-01T00:00:00Z",
    endDate: "2023-05-01T00:00:00Z",
    completed: false,
  },
  {
    ...challenges[3],
    progress: 7,
    startDate: "2023-04-10T00:00:00Z",
    endDate: "2023-04-17T00:00:00Z",
    completed: true,
    completedDate: "2023-04-17T00:00:00Z",
  },
  {
    ...challenges[4],
    progress: 450,
    startDate: "2023-04-05T00:00:00Z",
    endDate: "2023-05-05T00:00:00Z",
    completed: false,
  },
]

export const users: User[] = [
  {
    id: "1",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "/users/jane-new.jpg",
    bio: "Avid reader and meditation enthusiast",
    achievements: [achievements[0], achievements[1], achievements[3]],
    currentChallenges: [userChallenges[0], userChallenges[2]],
    completedChallenges: [userChallenges[1]],
    readingStats: {
      booksRead: 12,
      pagesRead: 3240,
      readingStreak: 15,
      totalReadingTime: 4320, // 72 hours in minutes
    },
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@example.com",
    avatar: "/users/john-new.jpg",
    bio: "Spiritual seeker and book lover",
    achievements: [achievements[2]],
    currentChallenges: [],
    completedChallenges: [],
    readingStats: {
      booksRead: 8,
      pagesRead: 1920,
      readingStreak: 5,
      totalReadingTime: 2160, // 36 hours in minutes
    },
  },
]

export const messages: Message[] = [
  {
    id: "1",
    senderId: "2",
    receiverId: "1",
    content: "Hey, have you read 'The Power of Now'? It's amazing!",
    timestamp: "2023-04-15T14:30:00Z",
    read: true,
  },
  {
    id: "2",
    senderId: "1",
    receiverId: "2",
    content: "Yes! It completely changed my perspective on mindfulness.",
    timestamp: "2023-04-15T14:35:00Z",
    read: true,
  },
  {
    id: "3",
    senderId: "2",
    receiverId: "1",
    content: "I'm thinking of starting a reading group for spiritual books. Would you be interested?",
    timestamp: "2023-04-15T14:40:00Z",
    read: false,
  },
]

export const conversations: Conversation[] = [
  {
    id: "1",
    participants: ["1", "2"],
    lastMessage: messages[2],
    unreadCount: 1,
  },
]

// Process data to replace empty strings with null values
function processData() {
  // For books
  books.forEach((book) => {
    if (!book.coverImage || book.coverImage === "") {
      book.coverImage = null
    }
  })

  // For categories
  categories.forEach((category) => {
    if (!category.image || category.image === "") {
      category.image = null
    }
  })

  // For quotes
  quotes.forEach((quote) => {
    if (!quote.backgroundImage || quote.backgroundImage === "") {
      quote.backgroundImage = null
    }
  })

  // For inspirations
  inspirations.forEach((inspiration) => {
    if (!inspiration.image || inspiration.image === "") {
      inspiration.image = null
    }
  })

  // For users
  users.forEach((user) => {
    if (!user.avatar || user.avatar === "") {
      user.avatar = null
    }
  })
}

// Call the function to process data
processData()

// Helper functions to simulate database operations
export function getBookById(id: string): Book | undefined {
  return books.find((book) => book.id === id)
}

export function getBooksByCategory(categorySlug: string): Book[] {
  return books.filter((book) => book.categories.includes(categorySlug))
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getUserById(id: string): User | undefined {
  return users.find((user) => user.id === id)
}

export function getConversationsByUserId(userId: string): Conversation[] {
  return conversations.filter((conversation) => conversation.participants.includes(userId))
}

export function getMessagesByConversationId(conversationId: string): Message[] {
  // In a real app, you would filter messages by conversation ID
  // For this demo, we'll just return all messages
  return messages
}

export function getAllChallenges(): Challenge[] {
  return challenges
}

export function getUserChallenges(userId: string): {
  current: UserChallenge[]
  completed: UserChallenge[]
} {
  const user = getUserById(userId)
  if (!user) {
    return { current: [], completed: [] }
  }

  return {
    current: user.currentChallenges,
    completed: user.completedChallenges,
  }
}

export function getUserAchievements(userId: string): Achievement[] {
  const user = getUserById(userId)
  return user?.achievements || []
}
