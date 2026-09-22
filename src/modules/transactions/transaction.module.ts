import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateTransactionUseCase } from './use-cases/create-transaction/create-transaction.use-case';
import { CreateTransactionController } from './use-cases/create-transaction/create-transaction.controller';
import { FindAllTransactionsUseCase } from './use-cases/find-all-transactions/find-all-transactions.use-case';
import { FindAllTransactionsController } from './use-cases/find-all-transactions/find-all-transactions.controller';
import { FindTransactionByIdUseCase } from './use-cases/find-transaction-by-id/find-transaction-by-id.use-case';
import { FindTransactionByIdController } from './use-cases/find-transaction-by-id/find-transaction-by-id.controller';
import { UpdateTransactionUseCase } from './use-cases/update-transaction/update-transaction.use-case';
import { UpdateTransactionController } from './use-cases/update-transaction/update-transaction.controller';
import { DeleteTransactionUseCase } from './use-cases/delete-transaction/delete-transaction.use-case';
import { DeleteTransactionController } from './use-cases/delete-transaction/delete-transaction.controller';
import { TransactionEntity } from './models/entity/transactions.entity';
import { TRANSACTION_REPOSITORY_INTERFACE_KEY } from './repository/transaction-repository.key';
import { TransactionTypeOrmRepository } from './repository/transaction-repository';
import { CategoriesModule } from '../categories/categories.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionEntity]),
    UsersModule,
    CategoriesModule
  ],
  controllers: [
    CreateTransactionController,
    FindAllTransactionsController,
    FindTransactionByIdController,
    UpdateTransactionController,
    DeleteTransactionController,
  ],
  providers: [
    {
      provide: TRANSACTION_REPOSITORY_INTERFACE_KEY,
      useClass: TransactionTypeOrmRepository,
    },
    CreateTransactionUseCase,
    FindAllTransactionsUseCase,
    FindTransactionByIdUseCase,
    UpdateTransactionUseCase,
    DeleteTransactionUseCase,
  ],
  exports: [TRANSACTION_REPOSITORY_INTERFACE_KEY],
})
export class TransactionsModule {}