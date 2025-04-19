import { users } from "@/lib/data"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Edit, LogOut, BookOpen, Clock, Heart, Award, Trophy } from "lucide-react"
import Link from "next/link"
import AchievementCard from "@/components/achievement-card"
import ChallengeCard from "@/components/challenge-card"

export default function ProfilePage() {
  // For demo purposes, we'll assume the current user is user 1
  const currentUser = users[0]

  // Create a fallback avatar URL with the user name for Unsplash
  const avatarUrl = currentUser.avatar
    ? currentUser.avatar
    : `https://source.unsplash.com/random/200x200/?portrait,person,${encodeURIComponent(currentUser.name)}`

  // Format reading time
  const formatReadingTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  return (
    <main className="p-4 pb-20">
      <div className="flex justify-end mb-4">
        <Button variant="ghost" size="icon">
          <LogOut className="w-5 h-5 text-gray-400" />
        </Button>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-brand-purple">
          <Image
            src={avatarUrl || "/placeholder.svg"}
            alt={currentUser.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
        <h1 className="text-xl font-bold text-white">{currentUser.name}</h1>
        <p className="text-gray-400">{currentUser.email}</p>

        <Button variant="outline" size="sm" className="mt-4 border-brand-purple text-brand-purple">
          <Edit className="w-4 h-4 mr-2" /> Edit Profile
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">About Me</h2>
          <p className="text-gray-300">{currentUser.bio || "No bio yet."}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Reading Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-900/30 p-3 rounded-lg text-center">
              <div className="flex justify-center mb-1">
                <BookOpen className="w-5 h-5 text-brand-purple" />
              </div>
              <p className="text-2xl font-bold text-white">{currentUser.readingStats.booksRead}</p>
              <p className="text-xs text-gray-400">Books Read</p>
            </div>
            <div className="bg-blue-900/30 p-3 rounded-lg text-center">
              <div className="flex justify-center mb-1">
                <Clock className="w-5 h-5 text-brand-purple" />
              </div>
              <p className="text-2xl font-bold text-white">{currentUser.readingStats.readingStreak}</p>
              <p className="text-xs text-gray-400">Day Streak</p>
            </div>
            <div className="bg-blue-900/30 p-3 rounded-lg text-center">
              <div className="flex justify-center mb-1">
                <Award className="w-5 h-5 text-brand-purple" />
              </div>
              <p className="text-2xl font-bold text-white">{currentUser.readingStats.pagesRead}</p>
              <p className="text-xs text-gray-400">Pages Read</p>
            </div>
            <div className="bg-blue-900/30 p-3 rounded-lg text-center">
              <div className="flex justify-center mb-1">
                <Heart className="w-5 h-5 text-brand-purple" />
              </div>
              <p className="text-2xl font-bold text-white">
                {formatReadingTime(currentUser.readingStats.totalReadingTime)}
              </p>
              <p className="text-xs text-gray-400">Reading Time</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-white">Achievements</h2>
            <Link href="/achievements" className="text-sm text-brand-purple">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {currentUser.achievements.slice(0, 3).map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} compact />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-white">Current Challenges</h2>
            <Link href="/challenges" className="text-sm text-brand-purple flex items-center">
              <Trophy className="w-4 h-4 mr-1" /> View All
            </Link>
          </div>
          {currentUser.currentChallenges.length > 0 ? (
            <div className="space-y-3">
              {currentUser.currentChallenges.slice(0, 2).map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} userChallenge />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No active challenges. Join a challenge to start earning rewards!</p>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Favorite Categories</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-sm">Spirituality</span>
            <span className="px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-sm">Self-Help</span>
            <span className="px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-sm">Meditation</span>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Recent Activity</h2>
          <div className="space-y-3">
            <Link href="/books/1" className="block p-3 rounded-lg bg-blue-900/20 hover:bg-blue-900/30">
              <div className="flex items-center">
                <div className="relative w-12 h-16 rounded overflow-hidden mr-3">
                  <Image src="/book-covers/power-of-now.jpg" alt="Book cover" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-white">The Power of Now</h3>
                  <p className="text-xs text-gray-400">Finished reading 2 days ago</p>
                </div>
              </div>
            </Link>
            <Link href="/books/2" className="block p-3 rounded-lg bg-blue-900/20 hover:bg-blue-900/30">
              <div className="flex items-center">
                <div className="relative w-12 h-16 rounded overflow-hidden mr-3">
                  <Image src="/book-covers/atomic-habits.jpg" alt="Book cover" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Atomic Habits</h3>
                  <p className="text-xs text-gray-400">Currently reading - 65% complete</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
