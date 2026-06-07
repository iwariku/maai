import type { StatusDisplay } from '@/features/user/constants/statusDisplay';

type SelectStatusButtonProps = {
  display: StatusDisplay;
  isActive: boolean;
  onSelect: () => void;
};

export const SelectStatusButton = ({
  display,
  isActive,
  onSelect,
}: SelectStatusButtonProps) => (
  <button
    type="button"
    aria-pressed={isActive}
    onClick={onSelect}
    className={`w-full rounded-md px-4 py-4 text-center text-lg font-bold text-gray-900 transition ${display.cardStyle} ${
      isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'
    }`}
  >
    {display.label}
  </button>
);
