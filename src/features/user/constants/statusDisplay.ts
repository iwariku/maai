import type { EmployeeStatus } from '@/features/user/mock/mock';

export type StatusDisplay = {
  value: EmployeeStatus;
  label: string;
  cardStyle: string;
  badgeStyle: string;
  ringStyle: string;
};

export const STATUS_DISPLAYS: StatusDisplay[] = [
  {
    value: 'available',
    label: '出勤',
    cardStyle: 'bg-green-200',
    badgeStyle: 'bg-green-600 text-white',
    ringStyle: 'ring-green-600',
  },
  {
    value: 'break',
    label: '休憩中',
    cardStyle: 'bg-orange-200',
    badgeStyle: 'bg-orange-500 text-white',
    ringStyle: 'ring-orange-500',
  },
  {
    value: 'holiday',
    label: '休み',
    cardStyle: 'bg-blue-200',
    badgeStyle: 'bg-blue-600 text-white',
    ringStyle: 'ring-blue-600',
  },
  {
    value: 'off-duty',
    label: '退勤',
    cardStyle: 'bg-purple-200',
    badgeStyle: 'bg-purple-600 text-white',
    ringStyle: 'ring-purple-600',
  },
];

export const STATUS_DISPLAY_MAP: Record<EmployeeStatus, StatusDisplay> =
  STATUS_DISPLAYS.reduce(
    (acc, display) => {
      acc[display.value] = display;
      return acc;
    },
    {} as Record<EmployeeStatus, StatusDisplay>,
  );
