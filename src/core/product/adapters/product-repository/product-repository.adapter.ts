import { Uuid } from '@/core/shared/class/uuid/uuid.class';
import { TAsyncOutput, TPaginatedOutput } from '@/core/shared/types/output.type';
import { Injectable } from '@nestjs/common';
import { ProductFilter } from '../../class/product-filter/product-filter.class';
import { ProductEntity } from '../../entities/product/product.entity';
import { IProductRepository } from './product-repository.contract';

@Injectable()
export class ProductRepository implements IProductRepository {
  save(product: ProductEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getById(id: Uuid): TAsyncOutput<ProductEntity> {
    throw new Error('Method not implemented.');
  }
  list(filter: ProductFilter): TPaginatedOutput<ProductEntity> {
    throw new Error('Method not implemented.');
  }
  update(product: ProductEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
  softDelete(product: ProductEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
