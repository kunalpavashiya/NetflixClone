'use client'

import { Movie } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface MovieCardProps {
  movie: Movie;
  isLarge?: boolean;
}

export default function MovieCard({ movie, isLarge = false }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative ${isLarge ? 'h-[400px]' : 'h-[200px]'} min-w-[200px] cursor-pointer transition-transform duration-200 ease-out md:min-w-[260px] md:hover:scale-105`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={movie.thumbnailUrl}
        alt={movie.title}
        fill
        className="rounded-sm object-cover md:rounded"
      />
      
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 rounded-b">
          <h4 className="text-lg font-semibold">{movie.title}</h4>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-green-400">{movie.rating}</span>
            <span>{movie.duration}</span>
            {movie.isNetflixOriginal && (
              <span className="text-red-500">Netflix Original</span>
            )}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {movie.genre.map((g) => (
              <span key={g} className="text-xs bg-white/20 px-2 py-1 rounded">
                {g}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 