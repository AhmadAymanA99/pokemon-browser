import { useInfiniteQuery } from '@tanstack/react-query';
import { pokemonApi } from '../services/pokemonApi';
import type { PokemonListResponse } from '../types/pokemon';

const POKEMON_PER_PAGE = 20;

export const usePokemonInfinite = () => {
  return useInfiniteQuery<PokemonListResponse>({
    queryKey: ['pokemon-infinite'],
    queryFn: ({ pageParam = 0 }) => 
      pokemonApi.getPokemonList(POKEMON_PER_PAGE, pageParam as number),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const url = new URL(lastPage.next);
      const offset = parseInt(url.searchParams.get('offset') || '0', 10);
      return offset;
    },
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

