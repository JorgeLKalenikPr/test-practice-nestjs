import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateBudgetDto } from './create-budget.dto';

export function CreateBudgetDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Cria um novo orçamento' }),
    ApiBody({ type: CreateBudgetDto }),
    ApiResponse({ status: 201, description: 'Orçamento criado com sucesso' }),
    ApiResponse({ status: 400, description: 'Dados inválidos' }),
    ApiResponse({ status: 409, description: 'Já existe orçamento para essa categoria/mês/ano' }),
  );
}