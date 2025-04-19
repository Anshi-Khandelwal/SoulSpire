import { getAllChallenges, getUserChallenges } from "@/lib/data"
import ChallengeCard from "@/components/challenge-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy } from "lucide-react"

export default function ChallengesPage() {
  // For demo purposes, we'll assume the current user is user 1
  const currentUserId = "1"

  // Get all available challenges
  const availableChallenges = getAllChallenges()

  // Get user's current and completed challenges
  const { current: currentChallenges, completed: completedChallenges } = getUserChallenges(currentUserId)

  return (
    <main className="p-4 pb-20">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-2xl font-bold text-white">Reading Challenges</h1>
        <Trophy className="h-6 w-6 text-yellow-400" />
      </div>

      <Tabs defaultValue="current">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="current">In Progress</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          {currentChallenges.length > 0 ? (
            <div className="grid gap-4">
              {currentChallenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} userChallenge={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-400">You don't have any active challenges.</p>
              <p className="text-gray-400">Check out the available challenges to get started!</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="available">
          <div className="grid gap-4">
            {availableChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          {completedChallenges.length > 0 ? (
            <div className="grid gap-4">
              {completedChallenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} userChallenge={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-400">You haven't completed any challenges yet.</p>
              <p className="text-gray-400">Start with an available challenge to earn achievements!</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </main>
  )
}
