import { Injectable } from "@nestjs/common";
import { Service as _Service } from './support/service'
import { User } from "src/entities/user.entity";
import { UserDTO } from "./dtoobjects/user.dto";
import { Query, ResultWithMeta } from "src/entities/shared/interface";
import { Payload } from "src/security/payload";
import { InjectRepository } from "@mikro-orm/nestjs";
import { UserMapper } from "./mappers/user.mapper";
import { EntityManager, MongoEntityRepository } from "@mikro-orm/mongodb";
@Injectable()
export class UserService extends _Service<User, UserDTO> {

    constructor(
        @InjectRepository(User)
        protected readonly repository: MongoEntityRepository<User>,
        protected readonly em: EntityManager,
        protected readonly mapper: UserMapper,
    ) {
        super(repository, em, mapper);
    }

    find(query: Query, user?: Payload, source?: string, ip?: string): Promise<UserDTO[] | ResultWithMeta<UserDTO[], any>> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string, user?: Payload, source?: string, ip?: string): Promise<UserDTO> {
        throw new Error("Method not implemented.");
    }
    create(dto: UserDTO, user?: Payload, source?: string, ip?: string): Promise<UserDTO> {
        throw new Error("Method not implemented.");
    }
    update(id: string, dto: UserDTO, user?: Payload, source?: string, ip?: string): Promise<UserDTO> {
        throw new Error("Method not implemented.");
    }
    patch(id: string, dto: UserDTO, user?: Payload, source?: string, ip?: string): Promise<UserDTO> {
        throw new Error("Method not implemented.");
    }
    delete(id: string, user?: Payload, source?: string, ip?: string): Promise<number> {
        throw new Error("Method not implemented.");
    }
    
}