export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string[];
  rating: string;
  releaseYear: number;
  isTrending?: boolean;
  isNetflixOriginal?: boolean;
}

export interface Category {
  id: string;
  name: string;
  movies: Movie[];
} 