import { User } from '../entities/user.entity';

export type Payload = Pick<User, 'id' | 'name' >;
