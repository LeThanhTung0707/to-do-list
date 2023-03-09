import cluster from 'cluster';
import { Worker } from 'snowflake-uuid';
import { Long } from 'bson';
import { PrimaryKey, Property } from '@mikro-orm/core';
const _ = new Worker(cluster?.worker?.id ?? 0, 1, {
  workerIdBits: 5,
  datacenterIdBits: 5,
  sequenceBits: 12,
});

export const snowflake = () => Long.fromBigInt(_.nextId());
export class Base {
  @Property({ onCreate: () => new Date() })
  createdAt: Date;

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date;
}
export class SnowflakeBase {
  @PrimaryKey({ type: Long, fieldName: '_id', onCreate: () => snowflake() })
  id: Long;

  @Property({ onCreate: () => new Date() })
  createdAt: Date;

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date;
}
