import { getUserAchievements } from "@/lib/data"
import AchievementCard from "@/components/achievement-card"
import { Award } from "lucide-react"

export default function AchievementsPage() {
  // For demo purposes, we'll assume the current user is user 1
  const currentUserId = "1"

  // Get user's achievements
  const achievements = getUserAchievements(currentUserId)

  // Calculate total points
  const totalPoints = achievements.reduce((sum, achievement) => sum + achievement.points, 0)

  return (
    <main className="p-4 pb-20">
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-2xl font-bold text-white">Achievements</h1>
        <Award className="h-6 w-6 text-yellow-400" />
      </div>

      <div className="bg-blue-900/30 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-300">Total Achievement Points</p>
          <p className="text-2xl font-bold text-white">{totalPoints}</p>
        </div>
        <div className="bg-brand-purple/20 p-3 rounded-full">
          <Award className="h-8 w-8 text-brand-purple" />
        </div>
      </div>

      <div className="grid gap-4">
        {achievements.length > 0 ? (
          achievements.map((achievement) => <AchievementCard key={achievement.id} achievement={achievement} />)
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-400">You haven't earned any achievements yet.</p>
            <p className="text-gray-400">Complete challenges to earn achievements!</p>
          </div>
        )}
      </div>
    </main>
  )
}
