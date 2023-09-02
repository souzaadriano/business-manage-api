import { DateControll } from '@/core/shared/class/date-controll/date-controll.class';
import { Description } from '@/core/shared/class/description/description.class';
import { Uuid } from '@/core/shared/class/uuid/uuid.class';
import { IEntity } from '@/core/shared/contracts/entity/enitty.contract';
import { Price } from '../../class/price/price.class';
import { ProductName } from '../../class/product-name/product-name.class';
import { ProductCategoryEntity } from '../product-category/product-category.entity';
import { PRODUCT_CATEGORY } from '../product-category/product-category.enum';

export class ProductEntity implements IEntity {
  readonly id: Uuid;
  readonly name: ProductName;
  readonly category: ProductCategoryEntity;
  readonly description: Description;
  readonly price: Price;
  readonly date: DateControll;

  constructor(input: TProductEntityConstructor) {
    this.id = input.id;
    this.name = input.name;
    this.category = input.category;
    this.description = input.description;
    this.price = input.price;
    this.date = input.date;
  }

  static create(input: TProductEntityParameters) {
    return new ProductEntity({
      id: Uuid.create(),
      name: new ProductName(input.name),
      category: new ProductCategoryEntity(input.category),
      date: DateControll.create(),
      description: new Description(input.description),
      price: new Price(input.price),
    });
  }

  isDeleted(): boolean {
    return Boolean(this.date.deletedAt);
  }
}

export type TProductEntityParameters = {
  readonly name: string;
  readonly category: PRODUCT_CATEGORY;
  readonly description: string;
  readonly price: number;
};

export type TProductEntityConstructor = {
  readonly id: Uuid;
  readonly name: ProductName;
  readonly category: ProductCategoryEntity;
  readonly description: Description;
  readonly price: Price;
  readonly date: DateControll;
};
