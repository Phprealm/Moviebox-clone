import Image from "next/image"
import Link from "next/link"
import { Search, Menu, Download, Clock, ChevronRight } from "lucide-react"
import MovieCard from "@/components/movie-card"
import LiveMatch from "@/components/live-match"
import SideNav from "@/components/side-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-[#121212] border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button className="text-white">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="font-bold text-xl">MovieBox</span>
          </Link>
        </div>

        <div className="relative flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies/ TV Shows"
              className="w-full bg-[#1f1f1f] text-white rounded-md py-2 pl-4 pr-10 focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 text-sm">
            <Download className="w-4 h-4" />
            Download App
          </button>
          <button className="bg-transparent border border-gray-700 text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 text-sm">
            <Clock className="w-4 h-4" />
            Watch history
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <SideNav />

        {/* Main Content */}
        <main className="flex-1 p-4">
          {/* Live and Upcoming Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Live and upcoming</h2>
              <Link href="/live" className="text-gray-400 flex items-center text-sm">
                More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <LiveMatch
                status="LIVE"
                team1="Liverpool"
                team2="Arsenal"
                score1={2}
                score2={0}
                team1Logo="/placeholder.svg?height=40&width=40"
                team2Logo="/placeholder.svg?height=40&width=40"
                timeInfo="Started 3h 50m ago"
              />
              <LiveMatch
                status="Upcoming"
                team1="Real Madrid"
                team2="Mallorca"
                team1Logo="/placeholder.svg?height=40&width=40"
                team2Logo="/placeholder.svg?height=40&width=40"
                timeInfo="MAY 14 2025 · 19:30"
              />
              <LiveMatch
                status="Upcoming"
                team1="Sevilla"
                team2="Las Palmas"
                team1Logo="/placeholder.svg?height=40&width=40"
                team2Logo="/placeholder.svg?height=40&width=40"
                timeInfo="MAY 13 2025 · 19:30"
              />
              <LiveMatch
                status="Upcoming"
                team1="Villarreal"
                team2="Leganes"
                team1Logo="/placeholder.svg?height=40&width=40"
                team2Logo="/placeholder.svg?height=40&width=40"
                timeInfo="MAY 14 2025 · 17:00"
              />
            </div>
          </section>

          {/* Suggestions Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Suggestions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 overflow-x-auto relative">
              <MovieCard
                title="F4 Thailand: Boys Over Flowers"
                posterUrl="/placeholder.svg?height=300&width=200"
                rating={6.3}
              />
              <MovieCard title="Willow" posterUrl="/placeholder.svg?height=300&width=200" rating={5.7} />
              <MovieCard title="Everlasting Longing" posterUrl="/placeholder.svg?height=300&width=200" rating={7.6} />
              <MovieCard title="His Dark Materials" posterUrl="/placeholder.svg?height=300&width=200" rating={8.2} />
              <MovieCard title="Common Side Effects" posterUrl="/placeholder.svg?height=300&width=200" rating={8.6} />
              <MovieCard
                title="The World's Finest Assassin"
                posterUrl="/placeholder.svg?height=300&width=200"
                rating={7.9}
              />
              <MovieCard title="T.O.T.S." posterUrl="/placeholder.svg?height=300&width=200" rating={6.7} />
              <MovieCard title="Castlevania: Nocturne" posterUrl="/placeholder.svg?height=300&width=200" rating={7.4} />
              <MovieCard title="The 5th Wave" posterUrl="/placeholder.svg?height=300&width=200" rating={5.2} />
            </div>
          </section>

          {/* Trending Now Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center">
                Trending Now
                <span className="ml-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                      fill="#FF4500"
                    />
                    <path
                      d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                      fill="#FF4500"
                    />
                  </svg>
                </span>
              </h2>
              <Link href="/trending" className="text-gray-400 flex items-center text-sm">
                More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 overflow-x-auto relative">
              <MovieCard
                title="The Last of Us"
                posterUrl="/placeholder.svg?height=300&width=200"
                rating={8.7}
                releaseInfo="APRIL 13"
              />
              <MovieCard title="The Accountant 2" posterUrl="/placeholder.svg?height=300&width=200" rating={7.2} />
              <MovieCard title="Unseen" posterUrl="/placeholder.svg?height=300&width=200" rating={5.9} />
              <MovieCard title="Poker Face" posterUrl="/placeholder.svg?height=300&width=200" rating={7.8} />
              <MovieCard title="Andor" posterUrl="/placeholder.svg?height=300&width=200" rating={8.4} />
              <MovieCard title="Weak Hero" posterUrl="/placeholder.svg?height=300&width=200" rating={8.5} />
              <MovieCard
                title="The Walking Dead: Dead City"
                posterUrl="/placeholder.svg?height=300&width=200"
                rating={7.1}
              />
              <MovieCard title="Havoc" posterUrl="/placeholder.svg?height=300&width=200" rating={6.8} />
              <MovieCard
                title="You"
                posterUrl="/placeholder.svg?height=300&width=200"
                rating={7.7}
                releaseInfo="APRIL 18"
              />
            </div>
          </section>

          {/* Popular Movies Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Popular Movies</h2>
              <Link href="/popular" className="text-gray-400 flex items-center text-sm">
                More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 overflow-x-auto relative">
              <MovieCard title="The Accountant 2" posterUrl="/placeholder.svg?height=300&width=200" rating={7.2} />
              <MovieCard title="Havoc" posterUrl="/placeholder.svg?height=300&width=200" rating={6.8} />
              <MovieCard title="The Last of Us" posterUrl="/placeholder.svg?height=300&width=200" rating={8.7} />
              <MovieCard title="Andor" posterUrl="/placeholder.svg?height=300&width=200" rating={8.4} />
              <MovieCard title="Weak Hero" posterUrl="/placeholder.svg?height=300&width=200" rating={8.5} />
              <MovieCard title="You" posterUrl="/placeholder.svg?height=300&width=200" rating={7.7} />
            </div>
          </section>
        </main>
      </div>

      {/* App Download Section */}
      <div className="fixed bottom-20 left-4 flex flex-col items-center">
        <div className="bg-white p-2 rounded-lg mb-2">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="QR Code"
            width={100}
            height={100}
            className="w-20 h-20"
          />
        </div>
        <span className="text-xs text-gray-400">Get MovieBox app</span>
        <button className="mt-2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-1">
          <Download className="w-3 h-3" />
          Android App
        </button>
      </div>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-gray-500 border-t border-gray-800">
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
