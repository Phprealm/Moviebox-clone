import Image from "next/image"
import Link from "next/link"

interface MovieCardProps {
  title: string
  posterUrl: string
  rating: number
  releaseInfo?: string
}

export default function MovieCard({ title, posterUrl, rating, releaseInfo }: MovieCardProps) {
  return (
    <Link href={`/movie/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}>
      <div className="relative group">
        <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
          <Image
            src={posterUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Rating Badge */}
          <div className="absolute bottom-2 left-2 bg-black/70 text-yellow-400 px-2 py-0.5 rounded text-sm font-bold">
            {rating.toFixed(1)}
          </div>

          {/* Release Info Badge */}
          {releaseInfo && (
            <div className="absolute top-2 right-2 bg-red-600/90 text-white px-1.5 py-0.5 rounded text-[10px] font-medium">
              {releaseInfo}
            </div>
          )}
        </div>
        <h3 className="mt-2 text-sm font-medium line-clamp-2">{title}</h3>
      </div>
    </Link>
  )
}
