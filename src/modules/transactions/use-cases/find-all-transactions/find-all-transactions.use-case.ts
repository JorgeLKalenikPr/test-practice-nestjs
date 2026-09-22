import { Inject, Injectable } from '@nestjs/common';
import { type ITransactionRepository, TransactionFilters } from '../../repository/transaction-repository.interface';
import { TRANSACTION_REPOSITORY_INTERFACE_KEY } from '../../repository/transaction-repository.key';
import { TransactionEntity } from '../../models/entity/transactions.entity';

@Injectable()
export class FindAllTransactionsUseCase {
  constructor(
    @Inject(TRANSACTION_REPOSITORY_INTERFACE_KEY)
    private readonly transactionRepository: ITransactionRepository,
  ) {}

  async execute(filters: TransactionFilters): Promise<TransactionEntity[]> {
    return this.transactionRepository.findAll(filters);
  }
}