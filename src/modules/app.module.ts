import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from '../config/env.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/db.config';
import { EndpointLoggerMiddleware } from '../utils/middlewares/endpoint-logger.middleware';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { TransactionsModule } from './transactions/transaction.module';
import { BudgetsModule } from './budgets/budgets.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
    TypeOrmModule.forRootAsync(databaseConfig),
    UsersModule,
    CategoriesModule,
    TransactionsModule,
    BudgetsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(EndpointLoggerMiddleware).forRoutes('*');
  }
}
