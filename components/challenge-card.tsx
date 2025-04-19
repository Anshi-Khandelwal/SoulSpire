import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, BookOpen, Clock, Compass, Flame, Hourglass, BookMarked, Trophy, Zap } from "lucide-react"
import type { Challenge, UserChallenge } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"

interface ChallengeCardProps {
  challenge: Challenge | UserChallenge
  userChallenge?: boolean
}

export default function ChallengeCard({ challenge, userChallenge = false }: ChallengeCardProps) {
  // Cast to UserChallenge if it's a user challenge
  const userChallengeData = userChallenge ? (challenge as UserChallenge) : null

  // Calculate progress percentage for user challenges
  const progressPercentage = userChallengeData
    ? Math.min(Math.round((userChallengeData.progress / challenge.target) * 100), 100)
    : 0

  // Format remaining time for challenges with duration
  const remainingTime =
    userChallengeData && challenge.duration
      ? formatDistanceToNow(new Date(userChallengeData.endDate), { addSuffix: true })
      : null

  // Get the appropriate icon based on the challenge icon string
  const getIcon = () => {
    switch (challenge.icon) {
      case "compass":
        return <Compass className="h-5 w-5" />
      case "lotus":
        return <BookMarked className="h-5 w-5" />
      case "book-open":
        return <BookOpen className="h-5 w-5" />
      case "flame":
        return <Flame className="h-5 w-5" />
      case "hourglass":
        return <Hourglass className="h-5 w-5" />
      case "trophy":
        return <Trophy className="h-5 w-5" />
      case "award":
        return <Award className="h-5 w-5" />
      case "zap":
        return <Zap className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  // Format the target based on challenge type
  const formatTarget = () => {
    switch (challenge.type) {
      case "books":
        return `${challenge.target} books`
      case "pages":
        return `${challenge.target} pages`
      case "time":
        return `${Math.floor(challenge.target / 60)} hours`
      case "streak":
        return `${challenge.target} days`
      default:
        return `${challenge.target}`
    }
  }

  // Format the progress for user challenges
  const formatProgress = () => {
    if (!userChallengeData) return null

    switch (challenge.type) {
      case "books":
        return `${userChallengeData.progress}/${challenge.target} books`
      case "pages":
        return `${userChallengeData.progress}/${challenge.target} pages`
      case "time":
        return `${Math.floor(userChallengeData.progress / 60)}/${Math.floor(challenge.target / 60)} hours`
      case "streak":
        return `${userChallengeData.progress}/${challenge.target} days`
      default:
        return `${userChallengeData.progress}/${challenge.target}`
    }
  }

  return (
    <Card className="overflow-hidden border-0 bg-blue-900/30 text-white">
      <CardHeader className="bg-gradient-to-r from-brand-blue to-brand-purple p-4 flex flex-row items-center gap-2">
        <div className="bg-white/20 p-2 rounded-full">{getIcon()}</div>
        <div>
          <h3 className="font-semibold">{challenge.title}</h3>
          {challenge.category && (
            <Badge variant="outline" className="bg-white/10 text-xs border-0">
              {challenge.category.charAt(0).toUpperCase() + challenge.category.slice(1)}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <p className="text-sm text-gray-300 mb-4">{challenge.description}</p>

        {userChallenge && userChallengeData && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>{formatProgress()}</span>
              <span>{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-blue-900/50" />

            {remainingTime && !userChallengeData.completed && (
              <div className="flex items-center gap-1 text-xs text-gray-300 mt-2">
                <Clock className="h-3 w-3" />
                <span>Ends {remainingTime}</span>
              </div>
            )}

            {userChallengeData.completed && <Badge className="bg-green-600 mt-2">Completed</Badge>}
          </div>
        )}

        {!userChallenge && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4 text-yellow-400" />
              <span>{challenge.reward.points} points</span>
            </div>
            <div>
              <span className="text-gray-300">Target: {formatTarget()}</span>
            </div>
          </div>
        )}
      </CardContent>

      {!userChallenge && (
        <CardFooter className="p-4 pt-0">
          <Button className="w-full bg-brand-purple hover:bg-brand-purple/90">Accept Challenge</Button>
        </CardFooter>
      )}
    </Card>
  )
}
