import { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetailSkeleton } from '../components/PokemonDetailSkeleton';
import { ErrorDisplay } from '../components/ErrorDisplay';

const PokemonDetailContent = () => {
  const { id } = useParams<{ id: string }>();
  const { data: pokemon, isLoading, error, refetch } = usePokemon(id || '');

  if (error) {
    return <ErrorDisplay message={error.message} onRetry={() => refetch()} />;
  }

  if (isLoading || !pokemon) {
    return <PokemonDetailSkeleton />;
  }

  const imageUrl = pokemon.sprites.other?.['official-artwork']?.front_default 
    || pokemon.sprites.front_default 
    || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const getStatName = (name: string): string => {
    const statMap: Record<string, string> = {
      'hp': 'HP',
      'attack': 'Attack',
      'defense': 'Defense',
      'special-attack': 'Sp. Attack',
      'special-defense': 'Sp. Defense',
      'speed': 'Speed',
    };
    return statMap[name] || name;
  };

  const getMaxStat = 150; // Approximate max for visual scaling

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto py-8 px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 mb-6 transition-colors border border-gray-300"
        >
          <span>←</span>
          <span>Back to List</span>
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">⚡</span>
              <h1 className="text-3xl font-bold text-white capitalize">
                {pokemon.name}
              </h1>
            </div>
            <p className="text-center text-white/90">
              #{String(pokemon.id).padStart(3, '0')}
            </p>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Image and Basic Info */}
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-white rounded-full p-4 shadow-inner">
                    <img
                      src={imageUrl}
                      alt={pokemon.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex justify-center gap-2">
                  {pokemon.types.map((type) => (
                    <span
                      key={type.type.name}
                      className="px-4 py-1 bg-red-500 text-white rounded-full text-sm font-medium capitalize"
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">Height</span>
                    <span className="font-semibold">{pokemon.height / 10} m</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">Weight</span>
                    <span className="font-semibold">{pokemon.weight / 10} kg</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats and Abilities */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">Base Stats</h2>
                  <div className="space-y-3">
                    {pokemon.stats.map((stat) => (
                      <div key={stat.stat.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">
                            {getStatName(stat.stat.name)}
                          </span>
                          <span className="text-sm font-semibold">{stat.base_stat}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gray-800 h-2 rounded-full transition-all"
                            style={{
                              width: `${Math.min((stat.base_stat / getMaxStat) * 100, 100)}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Abilities</h2>
                  <div className="space-y-2">
                    {pokemon.abilities.map((ability) => (
                      <div key={ability.ability.name} className="flex items-center gap-2">
                        <span className="capitalize">{ability.ability.name}</span>
                        {ability.is_hidden && (
                          <span className="text-xs text-gray-500">(Hidden)</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">Base Experience</h2>
                  <p className="text-2xl font-bold text-purple-600">
                    {pokemon.base_experience} XP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PokemonDetailPage = () => {
  return (
    <Suspense fallback={<PokemonDetailSkeleton />}>
      <PokemonDetailContent />
    </Suspense>
  );
};

