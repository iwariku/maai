export type EmployeeStatus = 'available' | 'break' | 'holiday';

export type User = {
  id: string;
  name: string;
  status: EmployeeStatus;
  updatedAt: Date;
};
