import { Uuid } from '../../class/uuid/uuid.class';
import { TAsyncOutput, TPaginatedOutput } from '../../types/output.type';
import { IEntity } from '../entity/enitty.contract';

export interface IRepository<ENTITY extends IEntity, FILTER> {
  save(product: ENTITY): Promise<void>;
  getById(id: Uuid): TAsyncOutput<ENTITY>;
  list(filter: FILTER): TPaginatedOutput<ENTITY>;
  update(product: ENTITY): Promise<void>;
  softDelete(product: ENTITY): Promise<void>;
}
