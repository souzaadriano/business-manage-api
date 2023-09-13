import { Injectable } from '@nestjs/common';
import { DatabaseConnectionEngine } from '../database-connection.engine';
import { createUser, findByEmail, findById, softDeleteUser, updateUser } from '../queries/users.queries';

@Injectable()
export class UsersDAO {
  constructor(private readonly _engine: DatabaseConnectionEngine) {}

  public readonly createUser = this._engine.insert('createUser', createUser);
  public readonly findById = this._engine.first('findById', findById);
  public readonly findByEmail = this._engine.first('findByEmail', findByEmail);
  public readonly softDeleteUser = this._engine.delete('softDeleteUser', softDeleteUser);
  public readonly updateUser = this._engine.update('updateUser', updateUser);
}
