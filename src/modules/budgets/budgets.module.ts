import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetEntity } from './models/entity/budget.entity';
import { CreateBudgetUseCase } from './use-cases/create-budget/create-budget.use-case';
import { CreateBudgetController } from './use-cases/create-budget/create-budget.controller';
import { FindAllBudgetsUseCase } from './use-cases/find-all-budgets/find-all-budgets.use-case';
import { FindAllBudgetsController } from './use-cases/find-all-budgets/find-all-budgets.controller';
import { FindBudgetByIdUseCase } from './use-cases/find-budget-by-id/find-budget-by-id.use-case';
import { FindBudgetByIdController } from './use-cases/find-budget-by-id/find-budget-by-id.controller';
import { UpdateBudgetUseCase } from './use-cases/update-budget/update-budget.use-case';
import { UpdateBudgetController } from './use-cases/update-budget/update-budget.controller';
import { DeleteBudgetUseCase } from './use-cases/delete-budget/delete-budget.use-case';
import { DeleteBudgetController } from './use-cases/delete-budget/delete-budget.controller';
import { GetBudgetProgressUseCase } from './use-cases/get-budget-progress/get-budget-progress.use-case';
import { GetBudgetProgressController } from './use-cases/get-budget-progress/get-budget-progress.controller';
import { TransactionsModule } from '../transactions/transaction.module';
import { BUDGET_REPOSITORY_INTERFACE_KEY } from './repository/budget-repository.key';
import { BudgetTypeOrmRepository } from './repository/budget-repository';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetEntity]), TransactionsModule],
  controllers: [
    CreateBudgetController,
    FindAllBudgetsController,
    FindBudgetByIdController,
    UpdateBudgetController,
    DeleteBudgetController,
    GetBudgetProgressController,
  ],
  providers: [
    {
      provide: BUDGET_REPOSITORY_INTERFACE_KEY,
      useClass: BudgetTypeOrmRepository,
    },
    CreateBudgetUseCase,
    FindAllBudgetsUseCase,
    FindBudgetByIdUseCase,
    UpdateBudgetUseCase,
    DeleteBudgetUseCase,
    GetBudgetProgressUseCase,
  ],
  exports: [BUDGET_REPOSITORY_INTERFACE_KEY],
})
export class BudgetsModule {}