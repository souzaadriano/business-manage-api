import { ITENS_PER_PAGE } from './itens-per-page.enum';

export class Pagination {
  readonly page: number;
  readonly itensPerPage: ITENS_PER_PAGE;

  constructor(input: TPaginationConstructor) {
    this.page = input.page;
    this.itensPerPage = input.itensPerPage;
  }

  static default() {
    return new Pagination({
      itensPerPage: ITENS_PER_PAGE['10_ITENS'],
      page: 1,
    });
  }

  get limit(): number | null {
    return this.itensPerPage > 0 ? this.itensPerPage : null;
  }

  get offset(): number {
    if (this.itensPerPage === null) return 0;
    return this.page * this.itensPerPage - this.itensPerPage;
  }
}

export type TPaginationConstructor = {
  page: number;
  itensPerPage: ITENS_PER_PAGE;
};
