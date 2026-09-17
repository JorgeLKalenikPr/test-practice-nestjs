import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    schema: configService.get<string>('DB_SCHEMA'),
    logging: configService.get<boolean>('DB_LOGGING'),
    synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  }),
};