import { DateTime } from '../class/date-time/date-time.class';
import { Email } from '../class/email/email.class';
import { Uuid } from '../class/uuid/uuid.class';

export class UserSession {
  readonly id: Uuid;
  readonly userId: Uuid;
  readonly userName: string;
  readonly userEmail: Email;
  readonly issuedAt: DateTime;
  readonly expireAt: DateTime;

  constructor(input: TUserSessionConstructor) {
    this.id = input.id;
    this.userId = input.userId;
    this.userName = input.userName;
    this.userEmail = input.userEmail;
    this.issuedAt = input.issuedAt;
    this.expireAt = input.expireAt;
  }

  static create(input: TUserSessionRecipe) {
    const { expireAt, userEmail, userId, userName } = input;

    return new UserSession({
      issuedAt: DateTime.now(),
      id: Uuid.create(),
      expireAt,
      userEmail,
      userId,
      userName,
    });
  }

  isActive(): boolean {
    return this.issuedAt.isBefore(this.expireAt.value);
  }
}

export type TUserSessionRecipe = {
  userId: Uuid;
  userName: string;
  userEmail: Email;
  expireAt: DateTime;
};

export type TUserSessionConstructor = {
  id: Uuid;
  userId: Uuid;
  userName: string;
  userEmail: Email;
  issuedAt: DateTime;
  expireAt: DateTime;
};
