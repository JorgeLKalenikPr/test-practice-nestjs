import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ITransactionRepository } from './transaction-repository.interface';
import { TransactionEntity } from '../models/entity/transactions.entity';

@Injectable()
export class TransactionTypeOrmRepository implements ITransactionRepository {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly repository: Repository<TransactionEntity>,
  ) {}

  async create(transaction: Partial<TransactionEntity>): Promise<TransactionEntity> {
    return this.repository.create(transaction);
  }

  async save(transaction: TransactionEntity): Promise<TransactionEntity> {
    return this.repository.save(transaction);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}