export type UserStatus = 'available' | 'break' | 'holiday';

export type User = {
  id: string;
  name: string;
  status: UserStatus;
  updatedAt: Date;
};
