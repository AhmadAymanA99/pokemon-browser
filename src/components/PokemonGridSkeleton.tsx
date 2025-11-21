import { PokemonCardSkeleton } from './PokemonCardSkeleton';

interface PokemonGridSkeletonProps {
  count?: number;
}

export const PokemonGridSkeleton = ({ count = 20 }: PokemonGridSkeletonProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
      {Array.from({ length: count }).map((_, index) => (
        <PokemonCardSkeleton key={index} />
      ))}
    </div>
  );
};

