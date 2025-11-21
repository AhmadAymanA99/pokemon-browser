import { useQuery } from '@tanstack/react-query';
import { pokemonApi } from '../services/pokemonApi';
import type { Pokemon } from '../types/pokemon';

export const usePokemon = (id: string | number) => {
  return useQuery<Pokemon>({
    queryKey: ['pokemon', id],
    queryFn: () => pokemonApi.getPokemonById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

