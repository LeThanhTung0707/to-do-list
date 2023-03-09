import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module, Scope } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          debug: true,
          dbName: config.get('database.mongoDbs'),
          entities: ['dist/entities/**/*.entity.js'],
          entitiesTs: ['src/entities/**/*.entity.ts'],
          baseDir: process.cwd(),
          type: 'mongo',
          scope: Scope.DEFAULT,
          allowGlobalContext: false,
          clientUrl: config.get('database.mongoUrl'),
          validateRequired: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
