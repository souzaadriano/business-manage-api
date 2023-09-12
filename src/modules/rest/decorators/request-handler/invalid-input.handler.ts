import { TInvalidSchemaData } from '@/core/shared/exception/common/invalid-schema.exception';
import { ValidationError } from 'class-validator';

export class NormalizeSchemaErrors {
  static normalize(errors: ValidationError[], data: TInvalidSchemaData[], property?: string) {
    errors.forEach((error) => {
      if (error.children) return NormalizeSchemaErrors.normalize(error.children, data, error.property);
      data.push({
        target: property ? `${property}.${error.property}` : error.property,
        reason: Object.values(error.constraints),
      });
    });

    return data;
  }
}
