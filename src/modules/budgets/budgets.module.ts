import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetEntity } from './models/entity/budget.entity';
import { BUDGET_REPOSITORY_INTERFACE_KEY } from './repository/budget-repository.key';
import { BudgetTypeOrmRepository } from './repository/budget-repository';
@Module({
  imports: [TypeOrmModule.forFeature([BudgetEntity])],
  providers: [
    {
      provide: BUDGET_REPOSITORY_INTERFACE_KEY,
      useClass: BudgetTypeOrmRepository,
    },
  ],
  exports: [BUDGET_REPOSITORY_INTERFACE_KEY],
})
export class BudgetsModule {}