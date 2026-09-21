import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindBudgetByIdUseCase } from './find-budget-by-id.use-case';
import { FindBudgetByIdDocs } from './find-budget-by-id.swagger';

@ApiTags('Budgets')
@Controller('budgets')
export class FindBudgetByIdController {
  constructor(private readonly findBudgetByIdUseCase: FindBudgetByIdUseCase) {}

  @Get(':id')
  @FindBudgetByIdDocs()
  async findById(@Param('id') id: string) {
    return this.findBudgetByIdUseCase.execute(id);
  }
}