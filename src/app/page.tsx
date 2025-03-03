import { categories, featuredMovie } from '@/data/movies';
import MovieRow from '@/components/MovieRow';
import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Featured Movie */}
      <div className="relative h-[95vh]">
        {/* Background */}
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
            <img
              src={featuredMovie.thumbnailUrl}
              alt={featuredMovie.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center px-4 sm:px-8 lg:px-16">
          <div className="max-w-xl space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              {featuredMovie.title}
            </h1>
            <p className="text-lg sm:text-xl">
              {featuredMovie.description}
            </p>
            <div className="flex space-x-3">
              <button className="flex items-center gap-2 bg-white text-black px-8 py-2 rounded font-semibold hover:bg-white/90 transition">
                <PlayIcon className="h-6 w-6" />
                Play
              </button>
              <button className="flex items-center gap-2 bg-gray-500/70 text-white px-8 py-2 rounded font-semibold hover:bg-gray-500/50 transition">
                <InformationCircleIcon className="h-6 w-6" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Rows */}
      <div className="relative z-20 -mt-40 space-y-8 pb-20 pl-4">
        {categories.map((category) => (
          <MovieRow key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}
