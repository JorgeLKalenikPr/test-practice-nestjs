import { Inject, Injectable } from '@nestjs/common';
import { type IBudgetRepository } from '../../repository/budget-repository.interface';
import { BudgetEntity } from '../../models/entity/budget.entity';
import { BUDGET_REPOSITORY_INTERFACE_KEY } from '../../repository/budget-repository.key';

@Injectable()
export class FindAllBudgetsUseCase {
  constructor(
    @Inject(BUDGET_REPOSITORY_INTERFACE_KEY)
    private readonly budgetRepository: IBudgetRepository,
  ) {}

  async execute(userId: string): Promise<BudgetEntity[]> {
    return this.budgetRepository.findAllByUser(userId);
  }
}