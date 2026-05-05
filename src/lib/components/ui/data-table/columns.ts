import type { ColumnDef } from '@tanstack/table-core';

export type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  link: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'age',
    header: 'Age'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'link',
    header: 'Link'
  }
];
