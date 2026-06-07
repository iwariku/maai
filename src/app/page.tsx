'use client';

import { useState } from 'react';
import { updateUserStatus } from '@/features/user/actions/action';
import { StatusEditModal } from '@/features/user/components/StatusEditModal';
import { UserCard } from '@/features/user/components/UserCard';
import { mockUsers } from '@/features/user/mock/mock';
import type { UserStatus } from '@/features/user/types';

export default function Home() {
  const [users, setUsers] = useState(mockUsers);
  const [targetUserId, setTargetUserId] = useState<string | null>(null);

  const targetUser = users.find((user) => user.id === targetUserId) ?? null;

  const handleConfirm = (nextStatus: UserStatus) => {
    if (!targetUserId) return;
    setUsers((prev) => updateUserStatus(prev, targetUserId, nextStatus));
    setTargetUserId(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">スタッフ一覧</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <li key={user.id}>
              <UserCard
                user={user}
                onClick={() => setTargetUserId(user.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      {targetUser && (
        <StatusEditModal
          user={targetUser}
          onConfirm={handleConfirm}
          onClose={() => setTargetUserId(null)}
        />
      )}
    </main>
  );
}
