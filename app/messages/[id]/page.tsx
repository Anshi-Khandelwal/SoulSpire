import { getConversationsByUserId, getMessagesByConversationId, getUserById } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, ImageIcon, Smile, Paperclip } from "lucide-react"
import { format } from "date-fns"

export default function ConversationPage({ params }: { params: { id: string } }) {
  // For demo purposes, we'll assume the current user is user 1
  const currentUserId = "1"

  // Get all conversations for the current user
  const userConversations = getConversationsByUserId(currentUserId)

  // Find the specific conversation
  const conversation = userConversations.find((conv) => conv.id === params.id)

  if (!conversation) {
    notFound()
  }

  // Get the other participant (not the current user)
  const otherParticipantId = conversation.participants.find((id) => id !== currentUserId)
  const otherUser = otherParticipantId ? getUserById(otherParticipantId) : null

  if (!otherUser) {
    notFound()
  }

  // Create a fallback avatar URL with the user name for Unsplash
  const avatarUrl = otherUser.avatar
    ? otherUser.avatar
    : `https://source.unsplash.com/random/100x100/?portrait,person,${encodeURIComponent(otherUser.name)}`

  // Get messages for this conversation
  const messages = getMessagesByConversationId(conversation.id)

  return (
    <main className="flex flex-col h-screen pb-16">
      {/* Header */}
      <header className="p-4 border-b border-blue-900 flex items-center">
        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
          <Image
            src={avatarUrl || "/placeholder.svg"}
            alt={otherUser.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <h1 className="font-medium text-white">{otherUser.name}</h1>
          <p className="text-xs text-gray-400">Online</p>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const isCurrentUser = message.senderId === currentUserId

          return (
            <div key={message.id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
              {!isCurrentUser && (
                <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                  <Image
                    src={avatarUrl || "/placeholder.svg"}
                    alt={otherUser.name}
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  isCurrentUser
                    ? "bg-brand-purple text-white rounded-br-none"
                    : "bg-blue-900/30 text-white rounded-bl-none"
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-70">{format(new Date(message.timestamp), "h:mm a")}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-blue-900">
        <form className="flex items-center gap-2">
          <Button type="button" variant="ghost" size="icon" className="text-gray-400">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Button type="button" variant="ghost" size="icon" className="text-gray-400">
            <ImageIcon className="w-5 h-5" />
          </Button>
          <Input placeholder="Type a message..." className="flex-1 bg-blue-900/20 border-blue-900/50 text-white" />
          <Button type="button" variant="ghost" size="icon" className="text-gray-400">
            <Smile className="w-5 h-5" />
          </Button>
          <Button type="submit" size="icon" className="bg-brand-purple hover:bg-brand-purple/90">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </main>
  )
}
