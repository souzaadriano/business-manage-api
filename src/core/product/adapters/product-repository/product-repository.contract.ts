import { IRepository } from '@/core/shared/contracts/repository/repository.contract';
import { ProductFilter } from '../../class/product-filter/product-filter.class';
import { ProductEntity } from '../../entities/product/product.entity';

export const IProductRepository = Symbol('IProductRepository');
export interface IProductRepository extends IRepository<ProductEntity, ProductFilter> {}
