/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Mapper } from './support/base.mapper';
import { User } from 'src/entities/user.entity';
import { UserDTO } from '../dtoobjects/user.dto';
import { Builder } from 'builder-pattern';

@Injectable()
export class UserMapper extends Mapper<User, UserDTO> {
  toDTO(entity: User): UserDTO {
    return Builder(UserDTO).name(entity.name).fullName(entity.fullName).build();
  }
  toEntity(dto: UserDTO): User {
    return Builder(User).name(dto.name).fullName(dto.fullName).build();
  }
}
