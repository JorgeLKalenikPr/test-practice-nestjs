import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { type ITransactionRepository } from '../../repository/transaction-repository.interface';
import { TRANSACTION_REPOSITORY_INTERFACE_KEY } from '../../repository/transaction-repository.key';

@Injectable()
export class DeleteTransactionUseCase {
  constructor(
    @Inject(TRANSACTION_REPOSITORY_INTERFACE_KEY)
    private readonly transactionRepository: ITransactionRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const transaction = await this.transactionRepository.findById(id);
    if (!transaction) {
      throw new NotFoundException('Transação não encontrada');
    }

    await this.transactionRepository.delete(id);
  }
}