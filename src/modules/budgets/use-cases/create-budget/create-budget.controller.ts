import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBudgetUseCase } from './create-budget.use-case';
import { CreateBudgetDto } from './create-budget.dto';
import { CreateBudgetDocs } from './create-budget.swagger';

@ApiTags('Budgets')
@Controller('budgets')
export class CreateBudgetController {
  constructor(private readonly createBudgetUseCase: CreateBudgetUseCase) {}

  @Post()
  @CreateBudgetDocs()
  async create(@Body() dto: CreateBudgetDto) {
    return this.createBudgetUseCase.execute(dto);
  }
}