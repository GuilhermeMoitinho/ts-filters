import { type FilterComparationOperator } from '../models/filter';

export function compare<T = unknown>(
  value: T,
  operator: FilterComparationOperator,
  filterValue: T,
  caseSensitive = false
): boolean {
  if (typeof value === 'string' && typeof filterValue === 'string' && !caseSensitive) {
    value = value.toLowerCase() as T;
    filterValue = filterValue.toLowerCase() as T;
  }

  switch (operator) {
    case 'eq':
      return value === filterValue;
    case 'neq':
      return value !== filterValue;
    case 'gt':
      return (value as any) > filterValue;
    case 'gte':
      return (value as any) >= filterValue;
    case 'lt':
      return (value as any) < filterValue;
    case 'lte':
      return (value as any) <= filterValue;
    case 'contains':
      return (value as any).includes(filterValue);
    case 'notContains':
      return !(value as any).includes(filterValue);
    case 'startsWith':
      return (value as any).startsWith(filterValue);
    case 'endsWith':
      return (value as any).endsWith(filterValue);
    default:
      return false;
  }
}
