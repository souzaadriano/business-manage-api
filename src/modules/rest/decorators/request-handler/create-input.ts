import { InvalidSchemaException } from '@/core/shared/exception/common/invalid-schema.exception';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Request } from 'express';
import { NormalizeSchemaErrors } from './invalid-input.handler';

type TEntries = [key: string, value: any];

const setter = (schema: any, [key, value]: TEntries): any => {
  schema[key] = value;
  return schema;
};

export const createInput = (request: Request, Schema: ClassConstructor<any>) => {
  const data: any = {};
  const body = Object.entries(request.body);
  const params = Object.entries(request.params);
  const query = Object.entries(request.query);

  body.reduce(setter, data);
  params.reduce(setter, data);
  query.reduce(setter, data);

  const schema = plainToInstance(Schema, data);
  const result = validateSync(schema);
  if (result.length) throw new InvalidSchemaException(NormalizeSchemaErrors.normalize(result, []), Schema.name);

  return schema;
};
