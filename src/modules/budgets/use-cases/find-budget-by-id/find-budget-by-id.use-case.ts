import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { BudgetEntity } from '../../models/entity/budget.entity';
import { BUDGET_REPOSITORY_INTERFACE_KEY } from '../../repository/budget-repository.key';
import { type IBudgetRepository } from '../../repository/budget-repository.interface';

@Injectable()
export class FindBudgetByIdUseCase {
  constructor(
    @Inject(BUDGET_REPOSITORY_INTERFACE_KEY)
    private readonly budgetRepository: IBudgetRepository,
  ) {}

  async execute(id: string): Promise<BudgetEntity> {
    const budget = await this.budgetRepository.findById(id);
    if (!budget) {
      throw new NotFoundException('Orçamento não encontrado');
    }

    return budget;
  }
}