interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  hasNextPage: boolean;
  currentCount: number;
}

export const LoadMoreButton = ({
  onClick,
  isLoading,
  hasNextPage,
  currentCount,
}: LoadMoreButtonProps) => {
  if (!hasNextPage) {
    return (
      <div className="flex flex-col items-center gap-2 py-8">
        <p className="text-sm text-gray-600">
          Showing {currentCount} Pokemon
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {isLoading ? (
        <>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
            <p className="text-sm text-gray-600">Loading more Pokemon...</p>
          </div>
          <p className="text-sm text-gray-600">
            Showing {currentCount} Pokemon
          </p>
        </>
      ) : (
        <>
          <button
            onClick={onClick}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Load More
          </button>
          <p className="text-sm text-gray-600">
            Showing {currentCount} Pokemon
          </p>
        </>
      )}
    </div>
  );
};

