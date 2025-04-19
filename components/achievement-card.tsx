import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Book, Bookmark, Zap } from "lucide-react"
import type { Achievement } from "@/lib/types"
import { format } from "date-fns"

interface AchievementCardProps {
  achievement: Achievement
  compact?: boolean
}

export default function AchievementCard({ achievement, compact = false }: AchievementCardProps) {
  // Get the appropriate icon based on the achievement icon string
  const getIcon = () => {
    switch (achievement.icon) {
      case "award":
        return <Award className={compact ? "h-4 w-4" : "h-6 w-6"} />
      case "book":
        return <Book className={compact ? "h-4 w-4" : "h-6 w-6"} />
      case "zap":
        return <Zap className={compact ? "h-4 w-4" : "h-6 w-6"} />
      case "bookmark":
        return <Bookmark className={compact ? "h-4 w-4" : "h-6 w-6"} />
      default:
        return <Award className={compact ? "h-4 w-4" : "h-6 w-6"} />
    }
  }

  // Get the appropriate color based on the achievement level
  const getLevelColor = () => {
    switch (achievement.level) {
      case "bronze":
        return "bg-amber-700"
      case "silver":
        return "bg-gray-400"
      case "gold":
        return "bg-yellow-500"
      case "platinum":
        return "bg-blue-300"
      default:
        return "bg-purple-600"
    }
  }

  if (compact) {
    return (
      <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-900/20">
        <div className={`${getLevelColor()} p-1 rounded-full`}>{getIcon()}</div>
        <div>
          <p className="text-sm font-medium text-white">{achievement.title}</p>
          <p className="text-xs text-gray-400">{achievement.points} points</p>
        </div>
      </div>
    )
  }

  return (
    <Card className="overflow-hidden border-0 bg-blue-900/30 text-white">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`${getLevelColor()} p-2 rounded-full`}>{getIcon()}</div>
          <div>
            <h3 className="font-semibold">{achievement.title}</h3>
            <p className="text-xs text-gray-300">Earned on {format(new Date(achievement.dateEarned), "MMM d, yyyy")}</p>
          </div>
        </div>

        <p className="text-sm text-gray-300 mb-3">{achievement.description}</p>

        <div className="flex items-center justify-between">
          <Badge className={`${getLevelColor()} border-0`}>
            {achievement.level ? achievement.level.charAt(0).toUpperCase() + achievement.level.slice(1) : "Special"}
          </Badge>
          <span className="text-sm flex items-center gap-1">
            <Award className="h-4 w-4 text-yellow-400" />
            {achievement.points} points
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
