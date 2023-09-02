import { ITENS_PER_PAGE } from '../class/pagination/itens-per-page.enum';

export type TAsyncOutput<T> = Promise<TSyncOutput<T>>;
export type TSyncOutput<T> = T | undefined;
export type TPaginatedOutput<T> = Promise<{
  page: number;
  itensPerPage: ITENS_PER_PAGE;
  total: number;
  data: T[];
}>;
