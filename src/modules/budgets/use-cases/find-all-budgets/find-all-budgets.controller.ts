import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllBudgetsUseCase } from './find-all-budgets.use-case';
import { FindAllBudgetsDocs } from './find-all-budgets.swagger';

@ApiTags('Budgets')
@Controller('budgets')
export class FindAllBudgetsController {
  constructor(private readonly findAllBudgetsUseCase: FindAllBudgetsUseCase) {}

  @Get()
  @FindAllBudgetsDocs()
  async findAll(@Query('userId') userId: string) {
    return this.findAllBudgetsUseCase.execute(userId);
  }
}