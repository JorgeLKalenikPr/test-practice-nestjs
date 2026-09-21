import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ITransactionRepository } from './transaction-repository.interface';
import { TransactionEntity, TransactionType } from '../models/entity/transactions.entity';

@Injectable()
export class TransactionTypeOrmRepository implements ITransactionRepository {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly repository: Repository<TransactionEntity>,
  ) { }

  async create(transaction: Partial<TransactionEntity>): Promise<TransactionEntity> {
    return this.repository.create(transaction);
  }

  async save(transaction: TransactionEntity): Promise<TransactionEntity> {
    return this.repository.save(transaction);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findById(id: string): Promise<TransactionEntity | null> {
    return this.repository.findOneBy({ id });
  }

  async sumAmountByUserCategoryPeriod(
    userId: string,
    categoryId: string | null,
    month: number,
    year: number,
    type: TransactionType,
  ): Promise<number> {
    const qb = this.repository
      .createQueryBuilder('t')
      .select('COALESCE(SUM(t.amount), 0)', 'total')
      .where('t.user_id = :userId', { userId })
      .andWhere('EXTRACT(MONTH FROM t.transaction_date) = :month', { month })
      .andWhere('EXTRACT(YEAR FROM t.transaction_date) = :year', { year })
      .andWhere('t.type = :type', { type });

    if (categoryId) {
      qb.andWhere('t.category_id = :categoryId', { categoryId });
    } else {
      qb.andWhere('t.category_id IS NULL');
    }

    const result = await qb.getRawOne<{ total: string }>();
    return Number(result?.total ?? 0);
  }
}