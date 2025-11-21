import { useQuery } from '@tanstack/react-query';
import { pokemonApi } from '../services/pokemonApi';
import type { PokemonListResponse } from '../types/pokemon';

export const usePokemonList = (limit: number = 20, offset: number = 0) => {
  return useQuery<PokemonListResponse>({
    queryKey: ['pokemon-list', limit, offset],
    queryFn: () => pokemonApi.getPokemonList(limit, offset),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

