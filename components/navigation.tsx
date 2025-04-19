"use client"

import type React from "react"

import { Home, BookOpen, Search, MessageSquare, User } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Navigation() {
  const pathname = usePathname()

  // Don't show navigation on login/auth pages
  if (pathname === "/login" || pathname === "/signup" || pathname === "/forgot-password") {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-950/90 backdrop-blur-md border-t border-indigo-900 p-2 z-50">
      <div className="flex justify-around items-center">
        <NavItem href="/" icon={<Home className="w-5 h-5" />} label="Home" active={pathname === "/"} />
        <NavItem
          href="/categories"
          icon={<BookOpen className="w-5 h-5" />}
          label="Categories"
          active={pathname === "/categories"}
        />
        <NavItem href="/search" icon={<Search className="w-5 h-5" />} label="Search" active={pathname === "/search"} />
        <NavItem
          href="/messages"
          icon={<MessageSquare className="w-5 h-5" />}
          label="Messages"
          active={pathname === "/messages"}
        />
        <NavItem href="/profile" icon={<User className="w-5 h-5" />} label="Profile" active={pathname === "/profile"} />
      </div>
    </div>
  )
}

function NavItem({
  href,
  icon,
  label,
  active,
}: { href: string; icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <Link href={href} className={`flex flex-col items-center p-2 ${active ? "text-brand-purple" : "text-gray-400"}`}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  )
}
