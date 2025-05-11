import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Share, Download } from "lucide-react"

export default function MatchPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch match data based on the slug
  const matchParts = params.slug.split("-vs-")
  const team1 = matchParts[0]
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const team2 = matchParts[1]
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-[#121212] border-b border-gray-800">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="font-bold text-xl">MovieBox</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 text-sm">
            <Download className="w-4 h-4" />
            Download App
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Link href="/" className="inline-flex items-center text-blue-400 mb-4">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Match Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-900 rounded-lg p-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-300 mb-4">
              <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-medium">
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                LIVE
              </span>
              <span className="ml-2">Football - Premier League</span>
            </div>

            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=80&width=80" alt={team1} width={80} height={80} className="mb-2" />
                <h2 className="text-xl font-bold">{team1}</h2>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-1">2 - 0</div>
                <div className="text-sm text-gray-300">75'</div>
              </div>

              <div className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=80&width=80" alt={team2} width={80} height={80} className="mb-2" />
                <h2 className="text-xl font-bold">{team2}</h2>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-md">Watch Live</button>
              <button className="bg-transparent border border-gray-700 text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 text-sm">
                <Share className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Match Stats */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Match Stats</h2>

            <div className="space-y-4 mb-8">
              {/* Possession */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>65%</span>
                  <span className="text-gray-400">Possession</span>
                  <span>35%</span>
                </div>
                <div className="flex h-2 rounded-full overflow-hidden bg-gray-700">
                  <div className="bg-red-600 w-[65%]"></div>
                  <div className="bg-blue-600 w-[35%]"></div>
                </div>
              </div>

              {/* Shots */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>12</span>
                  <span className="text-gray-400">Shots</span>
                  <span>5</span>
                </div>
                <div className="flex h-2 rounded-full overflow-hidden bg-gray-700">
                  <div className="bg-red-600 w-[70%]"></div>
                  <div className="bg-blue-600 w-[30%]"></div>
                </div>
              </div>

              {/* Shots on Target */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>7</span>
                  <span className="text-gray-400">Shots on Target</span>
                  <span>2</span>
                </div>
                <div className="flex h-2 rounded-full overflow-hidden bg-gray-700">
                  <div className="bg-red-600 w-[78%]"></div>
                  <div className="bg-blue-600 w-[22%]"></div>
                </div>
              </div>

              {/* Corners */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>8</span>
                  <span className="text-gray-400">Corners</span>
                  <span>3</span>
                </div>
                <div className="flex h-2 rounded-full overflow-hidden bg-gray-700">
                  <div className="bg-red-600 w-[73%]"></div>
                  <div className="bg-blue-600 w-[27%]"></div>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Match Events</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-[#1f1f1f] rounded-lg">
                <div className="text-sm text-gray-400">15'</div>
                <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-xs">⚽</div>
                <div>
                  <div className="font-medium">GOAL!</div>
                  <div className="text-sm text-gray-400">Mohamed Salah ({team1})</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#1f1f1f] rounded-lg">
                <div className="text-sm text-gray-400">32'</div>
                <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center text-xs">🟨</div>
                <div>
                  <div className="font-medium">Yellow Card</div>
                  <div className="text-sm text-gray-400">Thomas Partey ({team2})</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#1f1f1f] rounded-lg">
                <div className="text-sm text-gray-400">45+2'</div>
                <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-xs">⚽</div>
                <div>
                  <div className="font-medium">GOAL!</div>
                  <div className="text-sm text-gray-400">Diogo Jota ({team1})</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lineups & Other Matches */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Lineups</h2>

            <div className="bg-[#1f1f1f] rounded-lg p-4 mb-6">
              <h3 className="font-medium mb-2">{team1}</h3>
              <div className="text-sm text-gray-300 space-y-1">
                <div>1. Alisson</div>
                <div>66. Alexander-Arnold</div>
                <div>4. Van Dijk (C)</div>
                <div>5. Konaté</div>
                <div>26. Robertson</div>
                <div>3. Fabinho</div>
                <div>8. Keita</div>
                <div>6. Thiago</div>
                <div>11. Salah</div>
                <div>20. Jota</div>
                <div>23. Díaz</div>
              </div>

              <h3 className="font-medium mt-4 mb-2">{team2}</h3>
              <div className="text-sm text-gray-300 space-y-1">
                <div>1. Ramsdale</div>
                <div>4. White</div>
                <div>12. Saliba</div>
                <div>6. Gabriel</div>
                <div>35. Zinchenko</div>
                <div>5. Partey</div>
                <div>34. Xhaka</div>
                <div>7. Saka</div>
                <div>8. Ødegaard (C)</div>
                <div>11. Martinelli</div>
                <div>9. Jesus</div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Other Live Matches</h2>

            <div className="space-y-3">
              <div className="bg-[#1f1f1f] rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs bg-red-600 text-white px-1.5 py-0.5 rounded">LIVE</span>
                  <span className="text-xs text-gray-400">65'</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Team Logo" width={24} height={24} />
                    <span>Man City</span>
                  </div>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Team Logo" width={24} height={24} />
                    <span>Tottenham</span>
                  </div>
                  <span className="font-bold">1</span>
                </div>
              </div>

              <div className="bg-[#1f1f1f] rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs bg-red-600 text-white px-1.5 py-0.5 rounded">LIVE</span>
                  <span className="text-xs text-gray-400">78'</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Team Logo" width={24} height={24} />
                    <span>Chelsea</span>
                  </div>
                  <span className="font-bold">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Team Logo" width={24} height={24} />
                    <span>Newcastle</span>
                  </div>
                  <span className="font-bold">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-gray-500 border-t border-gray-800 mt-12">
        <div className="flex justify-center gap-4 mb-2">
          <Link href="#" className="hover:text-gray-300">
            WhatsApp
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Telegram
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Facebook
          </Link>
          <Link href="#" className="hover:text-gray-300">
            TikTok
          </Link>
          <Link href="#" className="hover:text-gray-300">
            X
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Email
          </Link>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="#" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gray-300">
            User Agreement
          </Link>
        </div>
      </footer>
    </div>
  )
}
