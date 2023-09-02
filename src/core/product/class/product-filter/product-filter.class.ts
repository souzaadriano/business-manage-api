import { TDateInterval } from '@/core/shared/class/date-time/date-interval.type';
import { TextFilter } from '@/core/shared/class/filter/text/text-filter.class';
import { Pagination } from '@/core/shared/class/pagination/pagination.class';
import { ProductCategoryEntity } from '../../entities/product-category/product-category.entity';
import { PRODUCT_CATEGORY } from '../../entities/product-category/product-category.enum';
import { Price } from '../price/price.class';

export class ProductFilter {
  private readonly _name?: TextFilter;
  private readonly _price?: Price;
  private readonly _category?: ProductCategoryEntity;
  private readonly _createdAt?: TDateInterval;
  private readonly _isDeleted: boolean;
  readonly pagination: Pagination;

  constructor(input: TProductFilterConstructor) {
    this._name = input.name;
    this._price = input.price ? new Price(input.price) : undefined;
    this._category = input.category ? new ProductCategoryEntity(input.category) : undefined;
    this._createdAt = input.createdAt;
    this._isDeleted = Boolean(input.isDeleted);
    this.pagination = input.pagination ?? Pagination.default();
  }

  get name() {
    return this._name?.filter;
  }

  get price() {
    return this._price?.value;
  }

  get category() {
    return this._category?.value;
  }

  get createdAt() {
    return this._createdAt;
  }

  get isDeleted() {
    return this._isDeleted;
  }
}

export type TProductFilterConstructor = {
  name?: TextFilter;
  price?: number;
  category?: PRODUCT_CATEGORY;
  createdAt?: TDateInterval;
  isDeleted?: boolean;
  pagination?: Pagination;
};
