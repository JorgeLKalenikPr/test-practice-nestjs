import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from '../config/env.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/db.config';
import { EndpointLoggerMiddleware } from '../utils/middlewares/endpoint-logger.middleware';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
    TypeOrmModule.forRootAsync(databaseConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(EndpointLoggerMiddleware).forRoutes('*');
  }
}
