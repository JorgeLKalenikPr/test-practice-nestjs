import { TransactionEntity } from '../models/entity/transactions.entity';

export interface ITransactionRepository {
  create(transaction: Partial<TransactionEntity>): Promise<TransactionEntity>;
  save(transaction: TransactionEntity): Promise<TransactionEntity>;
  delete(id: string): Promise<void>;
}