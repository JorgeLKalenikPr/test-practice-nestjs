import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateBudgetUseCase } from './update-budget.use-case';
import { UpdateBudgetDto } from './update-budget.dto';
import { UpdateBudgetDocs } from './update-budget.swagger';

@ApiTags('Budgets')
@Controller('budgets')
export class UpdateBudgetController {
  constructor(private readonly updateBudgetUseCase: UpdateBudgetUseCase) {}

  @Put(':id')
  @UpdateBudgetDocs()
  async update(@Param('id') id: string, @Body() dto: UpdateBudgetDto) {
    return this.updateBudgetUseCase.execute(id, dto);
  }
}