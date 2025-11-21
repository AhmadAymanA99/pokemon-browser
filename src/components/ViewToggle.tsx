export type ViewMode = 'pagination' | 'infinite';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <button
        onClick={() => onViewChange('pagination')}
        className={`px-6 py-2 rounded-md transition-colors ${
          currentView === 'pagination'
            ? 'bg-black text-white'
            : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
        }`}
      >
        Page Controls
      </button>
      <button
        onClick={() => onViewChange('infinite')}
        className={`px-6 py-2 rounded-md transition-colors ${
          currentView === 'infinite'
            ? 'bg-black text-white'
            : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
        }`}
      >
        Infinite Scroll
      </button>
    </div>
  );
};

