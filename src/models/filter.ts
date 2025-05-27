import { type User } from './user';

export type FilterComparationOperator = 
  | 'eq'
  | 'neq'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith';

export interface Filter {
  field: keyof User;
  value: unknown;
  operator: FilterComparationOperator;
  caseSensitive?: boolean;
}
