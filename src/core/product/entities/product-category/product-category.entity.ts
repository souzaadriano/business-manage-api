import { CATEGORY_TYPE } from '@/core/shared/class/category/category-type.enum';
import { AbstractCategory } from '@/core/shared/class/category/category.abstract';
import { PRODUCT_CATEGORY } from './product-category.enum';

export class ProductCategoryEntity extends AbstractCategory<PRODUCT_CATEGORY> {
  readonly type = CATEGORY_TYPE.PRODUCT;
}
