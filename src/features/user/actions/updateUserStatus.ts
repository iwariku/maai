import type { UserStatus, User } from '@/features/user/types';

/**
 * 指定したユーザーの status と updatedAt を更新した新しい配列を返す。
 * 将来サーバーアクションに置き換える前提のシグネチャ。
 */
export const updateUserStatus = (
  users: User[],
  userId: string,
  nextStatus: UserStatus,
): User[] =>
  users.map((user) =>
    user.id === userId
      ? { ...user, status: nextStatus, updatedAt: new Date() }
      : user,
  );
