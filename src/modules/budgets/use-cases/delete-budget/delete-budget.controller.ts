import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteBudgetUseCase } from './delete-budget.use-case';
import { DeleteBudgetDocs } from './delete-budget.swagger';

@ApiTags('Budgets')
@Controller('budgets')
export class DeleteBudgetController {
  constructor(private readonly deleteBudgetUseCase: DeleteBudgetUseCase) {}

  @Delete(':id')
  @DeleteBudgetDocs()
  async delete(@Param('id') id: string) {
    await this.deleteBudgetUseCase.execute(id);
  }
}