# Boilerplate para projetos usando nest js

# Modulos

## Database

### Tecnologias

- [PGTyped](https://pgtyped.dev/docs/)
- [Prisma](https://www.prisma.io/docs)

O modulo de banco de dados utilza por padrão o pgtyped para criar e realizar consultas, e o utiliza o primsa para migrations

### How To Use

Na raiza do projeto temos a pasta database, onde colocaremos nossas migrations e nossos modelos do bancos e por fim a pasta script com o script que gera o arquivo schema.prisma

> Como funciona o schema modular ?

na pasta models, criamos os modelos de forma separadas, assim conseguimos modularizar e termos arquivos mais simples e coesos.
para que isso funcione é preciso seguir algumas pequenas regras nas relações e definições do banco.

Exemplo

`database/models/users.prisma`

```prisma
model Users {
  id String @id
  name String
  email String @unique
  hash String
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())
  deletedAt DateTime?

  @@index([email])
  @@map("users")
}
```

`database/models/profile.prisma`

```prisma
model Profile {
  id String @id
  userId String
  firstName String
  lastName String
  phone String
  avatar String
  address String

  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())
  deletedAt DateTime?

  user  Users  @relation(fields: [userId], references: [id])

  @@index([email])
  @@map("users")
}

//@relations
model Users {
    id        String      @id
    profile Profile

    @@map("users")
}
```

Tudo que vem após `//@relations` é descartado pelo script quando ele gera o schema.prisma, e é feito um format após para que o arquivo automaticamente adicione os campos e relações na model de users

o script é chamado através do arquivo makefile com o comando make schema

### criando as suas queries para o database com o pgtyped

na pasta `src/modules/database/sql` temos os arquivos `.sql` com as queries que serão transformadas em funções pelo pgtyped

```sql
/* @name createUser */
INSERT INTO
    "users" (
        "id",
        "name",
        "email",
        "hash",
        "createdAt",
        "updatedAt",
        "deletedAt"
    )
VALUES
    (
        :id,
        :name,
        :email,
        :hash,
        :createdAt,
        :updatedAt,
        :deletedAt
    );
```

após usar o comando `yarn generate:queires` ou `npm run generate:queries` ele irá gerar as queries na pasta `src/modules/database/queries`
após isso ja é possivel utilzar as funções geradas para consultar o banco, porem para uma melhor integração utilizaremos a pasta DAO `src/modules/database/dao`

```typescript
import { Injectable } from '@nestjs/common';
import { DatabaseConnectionEngine } from '../database-connection.engine';
import { createUser, findByEmail, findById, softDeleteUser, updateUser } from '../queries/users.queries';

@Injectable()
export class UsersDAO {
  constructor(private readonly _engine: DatabaseConnectionEngine) {}

  public readonly createUser = this._engine.insert('createUser', createUser);
}
```

todos os arquivos de dao devem ser adicionados no arquivo dao.provider.ts, que será adicionado ao modulo do banco e exportado.
`src/modules/database/dao/dao.provider.ts`

```typescript
import { UsersDAO } from './users.dao';
import { SomeDAO } from './some.dao';
export const DaoProviders = [UsersDAO, SomeDAO];
```

```typescript
@Injectable()
export class UsersRepository {
  constructor(private readonly _usersDao: UsersDAO) {}

  async createUser(user: User) {
    await this._usersDao.createUser(user);
  }
}
```

## Redis