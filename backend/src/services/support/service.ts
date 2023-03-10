import { EntityManager, MongoEntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { Payload } from '../../security/payload';
import { Query, ResultWithMeta } from '../../entities/shared/interface';
import { Mapper } from '../mappers/support/base.mapper';

export abstract class Service<E extends object, D> {
constructor(
    protected readonly repository: MongoEntityRepository<E>,
    protected readonly em: EntityManager,
    protected readonly mapper: Mapper<E, D>,
) {}
    abstract find(query: Query, user?: Payload, source?: string, ip?: string,): Promise<D[] | ResultWithMeta<D[], any>>;

    abstract findOne(id: string, user?: Payload, source?: string, ip?: string,): Promise<D>;

    abstract create(dto: D, user?: Payload, source?: string, ip?: string,): Promise<D>;

    abstract update(id: string, dto: D, user?: Payload, source?: string, ip?: string,): Promise<D>;

    abstract patch(id: string, dto: D, user?: Payload, source?: string, ip?: string,): Promise<D>;

    abstract delete(id: string, user?: Payload, source?: string, ip?: string,): Promise<number>;
}
