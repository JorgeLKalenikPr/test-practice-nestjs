import { BudgetEntity } from '../models/entity/budget.entity';

export interface IBudgetRepository {
  create(budget: Partial<BudgetEntity>): Promise<BudgetEntity>;
  save(budget: BudgetEntity): Promise<BudgetEntity>;
  delete(id: string): Promise<void>;
}