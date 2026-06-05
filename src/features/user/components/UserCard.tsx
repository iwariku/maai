import type { EmployeeStatus, User } from '@/features/user/mock/mock';

type UserCardProps = {
  user: User;
};

type StatusDisplay = {
  label: string;
  cardStyle: string;
  badgeStyle: string;
};

const STATUS_DISPLAY: Record<EmployeeStatus, StatusDisplay> = {
  available: {
    label: '出勤',
    cardStyle: 'bg-green-200',
    badgeStyle: 'bg-green-600 text-white',
  },
  break: {
    label: '休憩中',
    cardStyle: 'bg-orange-200',
    badgeStyle: 'bg-orange-500 text-white',
  },
  holiday: {
    label: '休み',
    cardStyle: 'bg-blue-200',
    badgeStyle: 'bg-blue-600 text-white',
  },
  'off-duty': {
    label: '退勤',
    cardStyle: 'bg-purple-200',
    badgeStyle: 'bg-purple-600 text-white',
  },
};

const formatUpdatedAt = (date: Date): string =>
  date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

export const UserCard = ({ user }: UserCardProps) => {
  const display = STATUS_DISPLAY[user.status];

  return (
    <div className={`rounded-lg p-4 shadow-sm ${display.cardStyle}`}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-gray-900">{user.name}</h3>
        <span
          className={`rounded-full px-3 py-1 text-base font-bold ${display.badgeStyle}`}
        >
          {display.label}
        </span>
      </div>
      <p className="mt-2 text-xs text-gray-700">
        最終更新: {formatUpdatedAt(user.updatedAt)}
      </p>
    </div>
  );
};
