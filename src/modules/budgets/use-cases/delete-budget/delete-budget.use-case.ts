import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { BUDGET_REPOSITORY_INTERFACE_KEY } from '../../repository/budget-repository.key';
import { type IBudgetRepository } from '../../repository/budget-repository.interface';

@Injectable()
export class DeleteBudgetUseCase {
  constructor(
    @Inject(BUDGET_REPOSITORY_INTERFACE_KEY)
    private readonly budgetRepository: IBudgetRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const budget = await this.budgetRepository.findById(id);
    if (!budget) {
      throw new NotFoundException('Orçamento não encontrado');
    }

    await this.budgetRepository.delete(id);
  }
}