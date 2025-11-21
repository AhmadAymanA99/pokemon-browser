export const PokemonDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto py-8 px-4">
        {/* Back Button Skeleton */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md w-32 h-10 animate-pulse"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Header Skeleton */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-white/20 rounded animate-pulse"></div>
              <div className="w-48 h-8 bg-white/20 rounded animate-pulse"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-5 bg-white/20 rounded animate-pulse"></div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Image and Basic Info */}
              <div className="space-y-6">
                {/* Image Skeleton */}
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gray-200 rounded-full p-4 shadow-inner animate-pulse">
                    <div className="w-full h-full bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Types Skeleton */}
                <div className="flex justify-center gap-2">
                  <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                </div>

                {/* Height/Weight Skeleton */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats and Abilities */}
              <div className="space-y-6">
                {/* Base Stats Skeleton */}
                <div>
                  <div className="w-32 h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="space-y-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                          <div className="w-8 h-4 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-300 h-2 rounded-full animate-pulse" style={{ width: `${(index + 1) * 15}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Abilities Skeleton */}
                <div>
                  <div className="w-24 h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="space-y-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Base Experience Skeleton */}
                <div>
                  <div className="w-32 h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

