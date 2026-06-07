'use client';

import { useState } from 'react';
import { SelectStatusButton } from '@/features/user/components/SelectStatusButton';
import { STATUS_ENTRIES } from '@/features/user/constants/statusDisplay';
import type { UserStatus, User } from '@/features/user/types';

type StatusEditModalProps = {
  user: User;
  onConfirm: (nextStatus: UserStatus) => void;
  onClose: () => void;
};

export const StatusEditModal = ({
  user,
  onConfirm,
  onClose,
}: StatusEditModalProps) => {
  const [selectedStatus, setSelectedStatus] = useState<UserStatus>(
    user.status,
  );
  const isChanged = selectedStatus !== user.status;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="閉じる"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        >
          ×
        </button>
        <h2 className="pr-8 text-lg font-bold text-gray-900">
          {user.name} のステータスを変更
        </h2>
        <div className="mt-4 space-y-2">
          {STATUS_ENTRIES.map(([status, display]) => (
            <SelectStatusButton
              key={status}
              display={display}
              isActive={selectedStatus === status}
              onSelect={() => setSelectedStatus(status)}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            disabled={!isChanged}
            onClick={() => onConfirm(selectedStatus)}
            className="rounded-md bg-blue-600 px-5 py-2 text-sm font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            更新
          </button>
        </div>
      </div>
    </div>
  );
};
