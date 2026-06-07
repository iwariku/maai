export type EmployeeStatus = 'available' | 'break' | 'holiday' | 'off-duty';

export type User = {
  id: string;
  name: string;
  status: EmployeeStatus;
  updatedAt: Date;
};
