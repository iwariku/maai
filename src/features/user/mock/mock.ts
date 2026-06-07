import type { User } from '@/features/user/types';

export const mockUsers: User[] = [
  {
    id: 'u-001',
    name: '田中 太郎',
    status: 'available',
    updatedAt: new Date('2026-06-05T09:00:00+09:00'),
  },
  {
    id: 'u-002',
    name: '鈴木 花子',
    status: 'break',
    updatedAt: new Date('2026-06-05T12:15:00+09:00'),
  },
  {
    id: 'u-003',
    name: '佐藤 健',
    status: 'holiday',
    updatedAt: new Date('2026-06-04T18:30:00+09:00'),
  },
  {
    id: 'u-004',
    name: '高橋 美咲',
    status: 'off-duty',
    updatedAt: new Date('2026-06-04T19:00:00+09:00'),
  },
  {
    id: 'u-005',
    name: '伊藤 翔',
    status: 'available',
    updatedAt: new Date('2026-06-05T08:45:00+09:00'),
  },
];
