import { type Filter } from '../models/filter';
import { compare } from './compare';

export function filterData<T>(data: T[], filters: Filter[]): T[] {
  return data.filter(item => 
    filters.every(filter => 
      compare(
        item[filter.field] as any, 
        filter.operator, 
        filter.value as any, 
        filter.caseSensitive
      )
    )
  );
}
