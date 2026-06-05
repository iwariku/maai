'use client';

import { useState } from 'react';
import { STATUS_DISPLAYS } from '@/features/user/constants/statusDisplay';
import type { EmployeeStatus, User } from '@/features/user/mock/mock';

type StatusEditModalProps = {
  user: User;
  onConfirm: (nextStatus: EmployeeStatus) => void;
  onClose: () => void;
};

export const StatusEditModal = ({
  user,
  onConfirm,
  onClose,
}: StatusEditModalProps) => {
  const [selectedStatus, setSelectedStatus] = useState<EmployeeStatus>(
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
        <fieldset className="mt-4 space-y-2">
          {STATUS_DISPLAYS.map((option) => {
            const isSelected = selectedStatus === option.value;
            return (
              <label
                key={option.value}
                className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-3 transition ${option.cardStyle} ${
                  isSelected
                    ? `ring-2 ${option.ringStyle}`
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <input
                  type="radio"
                  name="status"
                  value={option.value}
                  checked={isSelected}
                  onChange={() => setSelectedStatus(option.value)}
                  className="h-4 w-4"
                />
                <span className="text-base font-semibold text-gray-900">
                  {option.label}
                </span>
              </label>
            );
          })}
        </fieldset>
        <div className="mt-6 flex justify-end">
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
