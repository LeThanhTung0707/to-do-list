/* eslint-disable prettier/prettier */
import { Long } from 'bson';
import { User as IUser } from '../../entities/shared/user.interface';

export class UserDTO implements IUser {
  id: Long | any;
  name: string;
  password: string;
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
}
