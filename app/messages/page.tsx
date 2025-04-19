import { conversations, getUserById } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"

export default function MessagesPage() {
  // For demo purposes, we'll assume the current user is user 1
  const currentUserId = "1"
  const userConversations = conversations.filter((conv) => conv.participants.includes(currentUserId))

  return (
    <main className="p-4 pb-20">
      <h1 className="text-2xl font-bold text-white mb-6">Messages</h1>

      {userConversations.length > 0 ? (
        <div className="space-y-4">
          {userConversations.map((conversation) => {
            // Get the other participant (not the current user)
            const otherParticipantId = conversation.participants.find((id) => id !== currentUserId)
            const otherUser = otherParticipantId ? getUserById(otherParticipantId) : null

            if (!otherUser) return null

            // Create a fallback avatar URL with the user name for Unsplash
            const avatarUrl = otherUser.avatar
              ? otherUser.avatar
              : `https://source.unsplash.com/random/100x100/?portrait,person,${encodeURIComponent(otherUser.name)}`

            return (
              <Link
                key={conversation.id}
                href={`/messages/${conversation.id}`}
                className="flex items-center p-3 rounded-lg bg-blue-900/20 hover:bg-blue-900/30"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src={avatarUrl || "/placeholder.svg"}
                    alt={otherUser.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-white">{otherUser.name}</h3>
                    <span className="text-xs text-gray-400">
                      {formatDistanceToNow(new Date(conversation.lastMessage.timestamp), { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-1">{conversation.lastMessage.content}</p>
                </div>
                {conversation.unreadCount > 0 && (
                  <div className="ml-2 w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">{conversation.unreadCount}</span>
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      ) : (
        <p className="text-white/70">No conversations yet.</p>
      )}
    </main>
  )
}
