import { Builder } from 'builder-pattern';
import { Configuration } from '../entities/shared/configure.interface';

export default () =>
  Builder<Configuration>()
    .database({
      mongoUrl: process.env.MONGO_URL || '',
      mongoDbs: process.env.MONGO_DBS || '',
    })
    .build();
