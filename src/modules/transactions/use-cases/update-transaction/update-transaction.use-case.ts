import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { type ITransactionRepository } from '../../repository/transaction-repository.interface';
import { UpdateTransactionDto } from './update-transaction.dto';
import { TRANSACTION_REPOSITORY_INTERFACE_KEY } from '../../repository/transaction-repository.key';
import { CATEGORY_REPOSITORY_INTERFACE_KEY } from '../../../categories/repository/categories-repository.key';
import { type ICategoryRepository } from '../../../categories/repository/categories-repository.interface';
import { TransactionEntity } from '../../models/entity/transactions.entity';

@Injectable()
export class UpdateTransactionUseCase {
  constructor(
    @Inject(TRANSACTION_REPOSITORY_INTERFACE_KEY)
    private readonly transactionRepository: ITransactionRepository,
    @Inject(CATEGORY_REPOSITORY_INTERFACE_KEY)
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(id: string, dto: UpdateTransactionDto): Promise<TransactionEntity> {
    const transaction = await this.transactionRepository.findById(id);
    if (!transaction) {
      throw new NotFoundException('Transação não encontrada');
    }

    if (dto.categoryId) {
      const category = await this.categoryRepository.findById(dto.categoryId);
      if (!category) {
        throw new BadRequestException('Categoria informada não existe');
      }
    }

    Object.assign(transaction, dto);
    return this.transactionRepository.save(transaction);
  }
}