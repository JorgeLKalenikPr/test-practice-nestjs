import { BudgetEntity } from '../models/entity/budget.entity';

export interface IBudgetRepository {
  create(budget: Partial<BudgetEntity>): Promise<BudgetEntity>;
  save(budget: BudgetEntity): Promise<BudgetEntity>;
  findById(id: string): Promise<BudgetEntity | null>;
  findAllByUser(userId: string): Promise<BudgetEntity[]>;
  findByUserCategoryMonthYear(
    userId: string,
    categoryId: string | null,
    month: number,
    year: number,
  ): Promise<BudgetEntity | null>;
  delete(id: string): Promise<void>;
}