import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { type IBudgetRepository } from '../../repository/budget-repository.interface';
import { BudgetEntity } from '../../models/entity/budget.entity';
import { CreateBudgetDto } from './create-budget.dto';
import { BUDGET_REPOSITORY_INTERFACE_KEY } from '../../repository/budget-repository.key';

@Injectable()
export class CreateBudgetUseCase {
  constructor(
    @Inject(BUDGET_REPOSITORY_INTERFACE_KEY)
    private readonly budgetRepository: IBudgetRepository,
  ) {}

  async execute(dto: CreateBudgetDto): Promise<BudgetEntity> {
    const existing = await this.budgetRepository.findByUserCategoryMonthYear(
      dto.userId,
      dto.categoryId ?? null,
      dto.month,
      dto.year,
    );

    if (existing) {
      throw new ConflictException('Já existe um orçamento para essa categoria neste mês/ano');
    }

    const budget = await this.budgetRepository.create(dto);
    return this.budgetRepository.save(budget);
  }
}