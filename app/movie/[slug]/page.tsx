import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star, Share, Download } from "lucide-react"

export default function MoviePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch movie data based on the slug
  const movieTitle = params.slug
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

        <div className="grid md:grid-cols-3 gap-8">
          {/* Movie Poster */}
          <div className="md:col-span-1">
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=600&width=400" alt={movieTitle} fill className="object-cover" />
            </div>
          </div>

          {/* Movie Details */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{movieTitle}</h1>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
              <span>2023</span>
              <span>•</span>
              <span>PG-13</span>
              <span>•</span>
              <span>2h 15m</span>
            </div>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">8.5</span>
                <span className="text-gray-400 text-sm">/10</span>
              </div>

              <button className="bg-transparent border border-gray-700 text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 text-sm">
                <Share className="w-4 h-4" />
                Share
              </button>

              <button className="bg-red-600 text-white px-4 py-2 rounded-md">Watch Now</button>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
                nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
                tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-gray-400 mb-1">Director</h3>
                <p>Christopher Nolan</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Writers</h3>
                <p>Christopher Nolan, Jonathan Nolan</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Stars</h3>
                <p>Leonardo DiCaprio, Tom Hardy, Ellen Page</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Genres</h3>
                <p>Action, Sci-Fi, Thriller</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Watch Options</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                <button className="bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white px-4 py-3 rounded-md text-sm transition-colors">
                  HD 720p
                </button>
                <button className="bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white px-4 py-3 rounded-md text-sm transition-colors">
                  Full HD 1080p
                </button>
                <button className="bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white px-4 py-3 rounded-md text-sm transition-colors">
                  4K Ultra HD
                </button>
                <button className="bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white px-4 py-3 rounded-md text-sm transition-colors">
                  With Subtitles
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Similar Movies</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative aspect-[2/3] overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=200&text=Similar${i}`}
                      alt={`Similar Movie ${i}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-yellow-400 px-2 py-0.5 rounded text-sm font-bold">
                      {(7 + i / 10).toFixed(1)}
                    </div>
                  </div>
                ))}
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
