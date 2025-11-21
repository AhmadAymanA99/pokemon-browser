interface ErrorDisplayProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorDisplay = ({ message, onRetry }: ErrorDisplayProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Something went wrong
        </p>
        {message && (
          <p className="text-sm text-gray-600 mb-4">{message}</p>
        )}
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

