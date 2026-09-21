import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { UpdateBudgetDto } from './update-budget.dto';

export function UpdateBudgetDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Atualiza um orçamento existente' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiBody({ type: UpdateBudgetDto }),
    ApiResponse({ status: 200, description: 'Orçamento atualizado com sucesso' }),
    ApiResponse({ status: 404, description: 'Orçamento não encontrado' }),
  );
}