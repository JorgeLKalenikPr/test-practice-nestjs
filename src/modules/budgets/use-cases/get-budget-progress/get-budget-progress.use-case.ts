import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { type IBudgetRepository } from '../../repository/budget-repository.interface';
import { type ITransactionRepository } from '../../../transactions/repository/transaction-repository.interface';
import { BUDGET_REPOSITORY_INTERFACE_KEY } from '../../repository/budget-repository.key';
import { TRANSACTION_REPOSITORY_INTERFACE_KEY } from '../../../transactions/repository/transaction-repository.key';
import { TransactionType } from '../../../transactions/models/entity/transactions.entity';

export interface BudgetProgress {
  budgetId: string;
  name: string;
  budgeted: number;
  spent: number;
  remaining: number;
  percentageUsed: number;
}

@Injectable()
export class GetBudgetProgressUseCase {
  constructor(
    @Inject(BUDGET_REPOSITORY_INTERFACE_KEY)
    private readonly budgetRepository: IBudgetRepository,
    @Inject(TRANSACTION_REPOSITORY_INTERFACE_KEY)
    private readonly transactionRepository: ITransactionRepository,
  ) {}

  async execute(budgetId: string): Promise<BudgetProgress> {
    const budget = await this.budgetRepository.findById(budgetId);
    if (!budget) {
      throw new NotFoundException('Orçamento não encontrado');
    }

    const spent = await this.transactionRepository.sumAmountByUserCategoryPeriod(
      budget.userId,
      budget.categoryId,
      budget.month,
      budget.year,
      TransactionType.EXPENSE,
    );

    const budgeted = Number(budget.amount);
    const remaining = budgeted - spent;
    const percentageUsed = budgeted > 0 ? Math.round((spent / budgeted) * 10000) / 100 : 0;

    return {
      budgetId: budget.id,
      name: budget.name,
      budgeted,
      spent,
      remaining,
      percentageUsed,
    };
  }
}