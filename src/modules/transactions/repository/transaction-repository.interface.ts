import { TransactionEntity, TransactionType } from '../models/entity/transactions.entity';


export interface TransactionFilters {
  userId: string;
  month?: number;
  year?: number;
  categoryId?: string;
  type?: TransactionType;
}

export interface ITransactionRepository {
  create(transaction: Partial<TransactionEntity>): Promise<TransactionEntity>;
  save(transaction: TransactionEntity): Promise<TransactionEntity>;
  findById(id: string): Promise<TransactionEntity | null>;
  findAll(filters: TransactionFilters): Promise<TransactionEntity[]>;
  delete(id: string): Promise<void>;
  sumAmountByUserCategoryPeriod(
    userId: string,
    categoryId: string | null,
    month: number,
    year: number,
    type: TransactionType,
  ): Promise<number>;
}