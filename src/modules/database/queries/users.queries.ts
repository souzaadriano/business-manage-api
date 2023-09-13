/** Types generated for queries found in "src/modules/database/sql/users.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'CreateUser' parameters type */
export interface ICreateUserParams {
  createdAt?: Date | string | null | void;
  deletedAt?: Date | string | null | void;
  email?: string | null | void;
  hash?: string | null | void;
  id?: string | null | void;
  name?: string | null | void;
  updatedAt?: Date | string | null | void;
}

/** 'CreateUser' return type */
export type ICreateUserResult = void;

/** 'CreateUser' query type */
export interface ICreateUserQuery {
  params: ICreateUserParams;
  result: ICreateUserResult;
}

const createUserIR: any = {"usedParamSet":{"id":true,"name":true,"email":true,"hash":true,"createdAt":true,"updatedAt":true,"deletedAt":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":178,"b":180}]},{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":191,"b":195}]},{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":206,"b":211}]},{"name":"hash","required":false,"transform":{"type":"scalar"},"locs":[{"a":222,"b":226}]},{"name":"createdAt","required":false,"transform":{"type":"scalar"},"locs":[{"a":237,"b":246}]},{"name":"updatedAt","required":false,"transform":{"type":"scalar"},"locs":[{"a":257,"b":266}]},{"name":"deletedAt","required":false,"transform":{"type":"scalar"},"locs":[{"a":277,"b":286}]}],"statement":"INSERT INTO\n    \"users\" (\n        \"id\",\n        \"name\",\n        \"email\",\n        \"hash\",\n        \"createdAt\",\n        \"updatedAt\",\n        \"deletedAt\"\n    )\nVALUES\n    (\n        :id,\n        :name,\n        :email,\n        :hash,\n        :createdAt,\n        :updatedAt,\n        :deletedAt\n    )"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO
 *     "users" (
 *         "id",
 *         "name",
 *         "email",
 *         "hash",
 *         "createdAt",
 *         "updatedAt",
 *         "deletedAt"
 *     )
 * VALUES
 *     (
 *         :id,
 *         :name,
 *         :email,
 *         :hash,
 *         :createdAt,
 *         :updatedAt,
 *         :deletedAt
 *     )
 * ```
 */
export const createUser = new PreparedQuery<ICreateUserParams,ICreateUserResult>(createUserIR);


/** 'FindByEmail' parameters type */
export interface IFindByEmailParams {
  email?: string | null | void;
}

/** 'FindByEmail' return type */
export interface IFindByEmailResult {
  createdAt: Date;
  deletedAt: Date | null;
  email: string;
  hash: string;
  id: string;
  name: string;
  updatedAt: Date;
}

/** 'FindByEmail' query type */
export interface IFindByEmailQuery {
  params: IFindByEmailParams;
  result: IFindByEmailResult;
}

const findByEmailIR: any = {"usedParamSet":{"email":true},"params":[{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":58,"b":63}]}],"statement":"select\n    *\nfrom\n    \"users\"\nwhere\n    \"users\".\"email\" = :email"};

/**
 * Query generated from SQL:
 * ```
 * select
 *     *
 * from
 *     "users"
 * where
 *     "users"."email" = :email
 * ```
 */
export const findByEmail = new PreparedQuery<IFindByEmailParams,IFindByEmailResult>(findByEmailIR);


/** 'FindById' parameters type */
export interface IFindByIdParams {
  id?: string | null | void;
}

/** 'FindById' return type */
export interface IFindByIdResult {
  createdAt: Date;
  deletedAt: Date | null;
  email: string;
  hash: string;
  id: string;
  name: string;
  updatedAt: Date;
}

/** 'FindById' query type */
export interface IFindByIdQuery {
  params: IFindByIdParams;
  result: IFindByIdResult;
}

const findByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":55,"b":57}]}],"statement":"select\n    *\nfrom\n    \"users\"\nwhere\n    \"users\".\"id\" = :id"};

/**
 * Query generated from SQL:
 * ```
 * select
 *     *
 * from
 *     "users"
 * where
 *     "users"."id" = :id
 * ```
 */
export const findById = new PreparedQuery<IFindByIdParams,IFindByIdResult>(findByIdIR);


/** 'SoftDeleteUser' parameters type */
export interface ISoftDeleteUserParams {
  deletedAt?: Date | string | null | void;
  id?: string | null | void;
}

/** 'SoftDeleteUser' return type */
export type ISoftDeleteUserResult = void;

/** 'SoftDeleteUser' query type */
export interface ISoftDeleteUserQuery {
  params: ISoftDeleteUserParams;
  result: ISoftDeleteUserResult;
}

const softDeleteUserIR: any = {"usedParamSet":{"deletedAt":true,"id":true},"params":[{"name":"deletedAt","required":false,"transform":{"type":"scalar"},"locs":[{"a":41,"b":50},{"a":71,"b":80}]},{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":99,"b":101}]}],"statement":"UPDATE\n    \"users\"\nSET\n    \"deletedAt\" = :deletedAt,\n    \"updatedAt\" = :deletedAt\nwhere\n    \"id\" = :id"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE
 *     "users"
 * SET
 *     "deletedAt" = :deletedAt,
 *     "updatedAt" = :deletedAt
 * where
 *     "id" = :id
 * ```
 */
export const softDeleteUser = new PreparedQuery<ISoftDeleteUserParams,ISoftDeleteUserResult>(softDeleteUserIR);


/** 'UpdateUser' parameters type */
export interface IUpdateUserParams {
  email?: string | null | void;
  hash?: string | null | void;
  id?: string | null | void;
  name?: string | null | void;
  updatedAt?: Date | string | null | void;
}

/** 'UpdateUser' return type */
export type IUpdateUserResult = void;

/** 'UpdateUser' query type */
export interface IUpdateUserQuery {
  params: IUpdateUserParams;
  result: IUpdateUserResult;
}

const updateUserIR: any = {"usedParamSet":{"name":true,"email":true,"hash":true,"updatedAt":true,"id":true},"params":[{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":36,"b":40}]},{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":57,"b":62}]},{"name":"hash","required":false,"transform":{"type":"scalar"},"locs":[{"a":78,"b":82}]},{"name":"updatedAt","required":false,"transform":{"type":"scalar"},"locs":[{"a":103,"b":112}]},{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":131,"b":133}]}],"statement":"UPDATE\n    \"users\"\nSET\n    \"name\" = :name,\n    \"email\" = :email,\n    \"hash\" = :hash,\n    \"updatedAt\" = :updatedAt\nwhere\n    \"id\" = :id"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE
 *     "users"
 * SET
 *     "name" = :name,
 *     "email" = :email,
 *     "hash" = :hash,
 *     "updatedAt" = :updatedAt
 * where
 *     "id" = :id
 * ```
 */
export const updateUser = new PreparedQuery<IUpdateUserParams,IUpdateUserResult>(updateUserIR);

