import { Entity } from '@mikro-orm/core';
import { SnowflakeBase } from './support/base.entity';

@Entity({ collection: 'user' })
export class User extends SnowflakeBase{
    
}   
