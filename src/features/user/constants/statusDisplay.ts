import type { UserStatus } from '@/features/user/types';

export type StatusDisplay = {
  value: UserStatus;
  label: string;
  cardStyle: string;
  badgeStyle: string;
  ringStyle: string;
};

export const STATUS_DISPLAY_MAP: Record<UserStatus, StatusDisplay> = {
  available: {
    value: 'available',
    label: '出勤',
    cardStyle: 'bg-green-100',
    badgeStyle: 'bg-green-600 text-white',
    ringStyle: 'ring-green-500',
  },
  break: {
    value: 'break',
    label: '休憩中',
    cardStyle: 'bg-orange-200',
    badgeStyle: 'bg-orange-500 text-white',
    ringStyle: 'ring-orange-500',
  },
  holiday: {
    value: 'holiday',
    label: '休み',
    cardStyle: 'bg-blue-200',
    badgeStyle: 'bg-blue-600 text-white',
    ringStyle: 'ring-blue-600',
  },
};

export const STATUS_DISPLAYS: StatusDisplay[] = Object.values(STATUS_DISPLAY_MAP);
