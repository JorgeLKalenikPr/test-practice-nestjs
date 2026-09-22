import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { type ITransactionRepository } from '../../repository/transaction-repository.interface';
import { TRANSACTION_REPOSITORY_INTERFACE_KEY } from '../../repository/transaction-repository.key';
import { type IUserRepository } from '../../../users/repository/user-repository.interface';
import { USER_REPOSITORY_INTERFACE_KEY } from '../../../users/repository/user-repository.key';
import { TransactionEntity } from '../../models/entity/transactions.entity';
import { CreateTransactionDto } from './create-transaction.dto';
import { CATEGORY_REPOSITORY_INTERFACE_KEY } from '../../../categories/repository/categories-repository.key';
import { type ICategoryRepository } from '../../../categories/repository/categories-repository.interface';

@Injectable()
export class CreateTransactionUseCase {
  constructor(
    @Inject(TRANSACTION_REPOSITORY_INTERFACE_KEY)
    private readonly transactionRepository: ITransactionRepository,
    @Inject(USER_REPOSITORY_INTERFACE_KEY)
    private readonly userRepository: IUserRepository,
    @Inject(CATEGORY_REPOSITORY_INTERFACE_KEY)
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(dto: CreateTransactionDto): Promise<TransactionEntity> {
    const user = await this.userRepository.findById(dto.userId);
    if (!user) {
      throw new BadRequestException('Usuário informado não existe');
    }

    if (dto.categoryId) {
      const category = await this.categoryRepository.findById(dto.categoryId);
      if (!category) {
        throw new BadRequestException('Categoria informada não existe');
      }
    }

    const transaction = await this.transactionRepository.create(dto);
    return this.transactionRepository.save(transaction);
  }
}