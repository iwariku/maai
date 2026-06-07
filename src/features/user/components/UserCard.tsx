import { STATUS_DISPLAY_MAP } from '@/features/user/constants/statusDisplay';
import type { User } from '@/features/user/types';

type UserCardProps = {
  user: User;
  onClick: () => void;
};

const formatUpdatedAt = (date: Date): string =>
  date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

export const UserCard = ({ user, onClick }: UserCardProps) => {
  const display = STATUS_DISPLAY_MAP[user.status];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl p-6 text-left shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${display.cardStyle}`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-bold text-gray-900">{user.name}</h3>
        <span
          className={`rounded-full px-5 py-2 text-2xl font-bold ${display.badgeStyle}`}
        >
          {display.label}
        </span>
      </div>
      <p className="mt-4 text-right text-xs text-gray-700">
        最終更新: {formatUpdatedAt(user.updatedAt)}
      </p>
    </button>
  );
};
