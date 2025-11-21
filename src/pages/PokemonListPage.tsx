import { useState, Suspense } from 'react';
import { PokemonGrid } from '../components/PokemonGrid';
import { Pagination } from '../components/Pagination';
import { LoadMoreButton } from '../components/LoadMoreButton';
import { ViewToggle } from '../components/ViewToggle';
import { PokemonGridSkeleton } from '../components/PokemonGridSkeleton';
import { ErrorDisplay } from '../components/ErrorDisplay';
import { usePokemonList } from '../hooks/usePokemonList';
import { usePokemonInfinite } from '../hooks/usePokemonInfinite';
import type { ViewMode } from '../components/ViewToggle';

const POKEMON_PER_PAGE = 20;

const PaginationView = () => {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * POKEMON_PER_PAGE;
  
  const { data, isLoading, error, refetch } = usePokemonList(POKEMON_PER_PAGE, offset);

  if (error) {
    return <ErrorDisplay message={error.message} onRetry={() => refetch()} />;
  }

  if (isLoading) {
    return <PokemonGridSkeleton count={POKEMON_PER_PAGE} />;
  }

  if (!data) {
    return null;
  }

  const totalPages = Math.ceil(data.count / POKEMON_PER_PAGE);

  return (
    <>
      <PokemonGrid pokemon={data.results} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        totalItems={data.count}
        itemsPerPage={POKEMON_PER_PAGE}
        currentPageItemsCount={data.results.length}
      />
    </>
  );
};

const InfiniteScrollView = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    refetch,
  } = usePokemonInfinite();

  if (error) {
    return <ErrorDisplay message={error.message} onRetry={() => refetch()} />;
  }

  if (isLoading) {
    return <PokemonGridSkeleton count={POKEMON_PER_PAGE} />;
  }

  if (!data) {
    return null;
  }

  const allPokemon = data.pages.flatMap((page) => page.results);
  const totalCount = allPokemon.length;

  return (
    <>
      <PokemonGrid pokemon={allPokemon} />
      <LoadMoreButton
        onClick={() => fetchNextPage()}
        isLoading={isFetchingNextPage}
        hasNextPage={!!hasNextPage}
        currentCount={totalCount}
      />
    </>
  );
};

export const PokemonListPage = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('infinite');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">⚡</span>
            <h1 className="text-4xl font-bold text-gray-800">Pokédex</h1>
          </div>
          <p className="text-gray-600">
            {viewMode === 'pagination'
              ? 'Discover and explore Pokemon with page controls.'
              : 'Discover and explore Pokemon with infinite scroll'}
          </p>
        </div>

        <ViewToggle currentView={viewMode} onViewChange={setViewMode} />

        <Suspense fallback={<PokemonGridSkeleton count={POKEMON_PER_PAGE} />}>
          {viewMode === 'pagination' ? <PaginationView /> : <InfiniteScrollView />}
        </Suspense>
      </div>
    </div>
  );
};

