"use server"

import { cookies } from "next/headers"
import { users } from "./data"

// In a real app, you would use a proper authentication system
// This is a simplified version for demo purposes

export async function login(email: string, password: string) {
  // Find user by email
  const user = users.find((user) => user.email === email)

  // In a real app, you would verify the password here
  if (!user) {
    return { success: false, message: "Invalid email or password" }
  }

  // Set a cookie to simulate authentication
  cookies().set("userId", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return { success: true, user: { id: user.id, name: user.name, email: user.email } }
}

export async function signup(name: string, email: string, password: string) {
  // Check if user already exists
  const existingUser = users.find((user) => user.email === email)

  if (existingUser) {
    return { success: false, message: "Email already in use" }
  }

  // In a real app, you would create a new user in the database
  // For demo purposes, we'll pretend we created a user and return user 1
  const newUser = users[0]

  // Set a cookie to simulate authentication
  cookies().set("userId", newUser.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return { success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email } }
}

export async function logout() {
  cookies().delete("userId")
  return { success: true }
}

export async function getCurrentUser() {
  const userId = cookies().get("userId")?.value

  if (!userId) {
    return null
  }

  const user = users.find((user) => user.id === userId)

  if (!user) {
    return null
  }

  return { id: user.id, name: user.name, email: user.email }
}
