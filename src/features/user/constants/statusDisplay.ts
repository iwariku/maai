import type { UserStatus } from '@/features/user/types';

export type StatusDisplay = {
  label: string;
  cardStyle: string;
  badgeStyle: string;
};

export const STATUS_DISPLAY_MAP: Record<UserStatus, StatusDisplay> = {
  available: {
    label: '出勤',
    cardStyle: 'bg-green-100',
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
};

// Object.entries は TS の仕様上キーを string に潰してしまうため、
// 実際に存在する UserStatus へ型を取り戻すために as を使用している。
export const STATUS_ENTRIES = Object.entries(STATUS_DISPLAY_MAP) as [
  UserStatus,
  StatusDisplay,
][];
