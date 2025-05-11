import Image from "next/image"
import Link from "next/link"

interface LiveMatchProps {
  status: "LIVE" | "Upcoming"
  team1: string
  team2: string
  team1Logo: string
  team2Logo: string
  score1?: number
  score2?: number
  timeInfo: string
}

export default function LiveMatch({
  status,
  team1,
  team2,
  team1Logo,
  team2Logo,
  score1,
  score2,
  timeInfo,
}: LiveMatchProps) {
  const isLive = status === "LIVE"

  // Generate URL-friendly match ID
  const matchId = `${team1.toLowerCase().replace(/\s+/g, "-")}-vs-${team2.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <Link href={`/match/${matchId}`}>
      <div className="relative overflow-hidden rounded-lg">
        {/* Background with gradient */}
        <div
          className={`h-32 bg-gradient-to-r ${isLive ? "from-red-900 to-blue-900" : "from-blue-900 to-blue-900"} relative`}
        >
          {/* Status Badge */}
          <div
            className={`absolute top-2 left-2 ${isLive ? "bg-red-600" : ""} text-white px-2 py-0.5 rounded text-xs font-medium`}
          >
            {isLive && <span className="inline-block w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>}
            {status}
          </div>

          {/* Teams and Score */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3">
              {/* Team 1 */}
              <div className="flex flex-col items-center">
                <Image src={team1Logo || "/placeholder.svg"} alt={team1} width={40} height={40} className="mb-1" />
              </div>

              {/* Score or VS */}
              <div className="text-white text-2xl font-bold mx-2">
                {isLive ? (
                  <div className="flex items-center gap-2">
                    <span>{score1}</span>
                    <span className="text-gray-400 text-sm">-</span>
                    <span>{score2}</span>
                  </div>
                ) : (
                  <span className="text-gray-300">VS</span>
                )}
              </div>

              {/* Team 2 */}
              <div className="flex flex-col items-center">
                <Image src={team2Logo || "/placeholder.svg"} alt={team2} width={40} height={40} className="mb-1" />
              </div>
            </div>
          </div>

          {/* Time Info */}
          <div className="absolute bottom-2 left-0 right-0 text-center text-gray-300 text-xs">{timeInfo}</div>
        </div>

        {/* Match Title */}
        <div className="p-2 text-center text-sm">
          {team1} VS {team2}
        </div>
      </div>
    </Link>
  )
}
