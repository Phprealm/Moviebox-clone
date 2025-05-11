import Link from "next/link"
import { Home, Activity, BookOpen } from "lucide-react"

export default function SideNav() {
  return (
    <aside className="w-[200px] min-h-[calc(100vh-64px)] bg-[#121212] border-r border-gray-800 p-4 hidden md:block">
      <nav className="space-y-2">
        <Link href="/" className="flex items-center gap-3 p-3 rounded-lg bg-[#1f1f1f] text-white">
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>

        <Link
          href="/sport-live"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1f1f1f] text-gray-400 hover:text-white transition-colors"
        >
          <Activity className="w-5 h-5" />
          <span>Sport Live</span>
        </Link>

        <Link
          href="/novel"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1f1f1f] text-gray-400 hover:text-white transition-colors"
        >
          <BookOpen className="w-5 h-5" />
          <span>Novel</span>
          <span className="ml-auto">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>
          </span>
        </Link>
      </nav>
    </aside>
  )
}
