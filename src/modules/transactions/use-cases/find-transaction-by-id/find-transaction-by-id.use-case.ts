import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { type ITransactionRepository } from '../../repository/transaction-repository.interface';
import { TRANSACTION_REPOSITORY_INTERFACE_KEY } from '../../repository/transaction-repository.key';
import { TransactionEntity } from '../../models/entity/transactions.entity';

@Injectable()
export class FindTransactionByIdUseCase {
  constructor(
    @Inject(TRANSACTION_REPOSITORY_INTERFACE_KEY)
    private readonly transactionRepository: ITransactionRepository,
  ) {}

  async execute(id: string): Promise<TransactionEntity> {
    const transaction = await this.transactionRepository.findById(id);
    if (!transaction) {
      throw new NotFoundException('Transação não encontrada');
    }
    return transaction;
  }
}