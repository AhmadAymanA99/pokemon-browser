import { Link } from 'react-router-dom';
import { pokemonApi } from '../services/pokemonApi';
import type { PokemonListItem } from '../types/pokemon';

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const id = pokemonApi.extractIdFromUrl(pokemon.url);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  
  return (
    <Link 
      to={`/pokemon/${id}`}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
        <img 
          src={imageUrl}
          alt={pokemon.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 capitalize mb-1">
          {pokemon.name}
        </h3>
        <p className="text-sm text-gray-500">
          #{String(id).padStart(3, '0')}
        </p>
      </div>
    </Link>
  );
};

