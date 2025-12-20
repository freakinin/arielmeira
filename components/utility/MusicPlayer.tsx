'use client'

import { MusicTrack } from '@/types'

interface MusicPlayerProps {
  track: MusicTrack
}

export default function MusicPlayer({ track }: MusicPlayerProps) {
  return (
    <div className="p-6">
      {track.coverImage && (
        <div className="aspect-square bg-stone-200 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-stone-400 text-sm">Cover image</span>
        </div>
      )}
      <h3 className="font-serif text-xl font-semibold text-evergreen-900 mb-2">
        {track.title}
      </h3>
      {track.description && (
        <p className="text-stone-600 text-sm mb-4">{track.description}</p>
      )}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs px-2 py-1 bg-evergreen-100 text-evergreen-700 rounded">
          {track.category}
        </span>
        {track.duration && (
          <span className="text-xs text-stone-500">{track.duration}</span>
        )}
      </div>
      {track.audioUrl && (
        <audio controls className="w-full mt-4">
          <source src={track.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      <div className="flex gap-2 mt-4">
        {track.spotifyUrl && (
          <a
            href={track.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-evergreen-600 hover:text-evergreen-700"
          >
            Spotify
          </a>
        )}
        {track.appleMusicUrl && (
          <a
            href={track.appleMusicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-evergreen-600 hover:text-evergreen-700"
          >
            Apple Music
          </a>
        )}
      </div>
    </div>
  )
}

