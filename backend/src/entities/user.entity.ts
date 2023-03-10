/* eslint-disable prettier/prettier */
import { Entity, Property } from '@mikro-orm/core';
import { SnowflakeBase } from './support/base.entity';
import { User as IUser } from './shared/user.interface';
@Entity({ collection: 'user' })
export class User extends SnowflakeBase implements IUser {
  @Property() name: string;
  @Property() password: string;
  @Property() fullName: string;
}
