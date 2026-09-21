import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetBudgetProgressUseCase } from './get-budget-progress.use-case';
import { GetBudgetProgressDocs } from './get-budget-progress.swagger';

@ApiTags('Budgets')
@Controller('budgets')
export class GetBudgetProgressController {
  constructor(private readonly getBudgetProgressUseCase: GetBudgetProgressUseCase) {}

  @Get(':id/progress')
  @GetBudgetProgressDocs()
  async getProgress(@Param('id') id: string) {
    return this.getBudgetProgressUseCase.execute(id);
  }
}