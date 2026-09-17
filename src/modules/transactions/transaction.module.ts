import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './models/entity/transactions.entity';
import { TRANSACTION_REPOSITORY_INTERFACE_KEY } from './repository/transaction-repository.key';
import { TransactionTypeOrmRepository } from './repository/transaction-repository';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity])],
  providers: [
    {
      provide: TRANSACTION_REPOSITORY_INTERFACE_KEY,
      useClass: TransactionTypeOrmRepository,
    },
  ],
  exports: [TRANSACTION_REPOSITORY_INTERFACE_KEY],
})
export class TransactionsModule {}