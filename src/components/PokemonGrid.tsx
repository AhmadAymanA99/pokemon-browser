import { PokemonCard } from './PokemonCard';
import type { PokemonListItem } from '../types/pokemon';

interface PokemonGridProps {
  pokemon: PokemonListItem[];
}

export const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
      {pokemon.map((p) => (
        <PokemonCard key={p.name} pokemon={p} />
      ))}
    </div>
  );
};

