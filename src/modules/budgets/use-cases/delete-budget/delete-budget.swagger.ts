import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function DeleteBudgetDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Remove um orçamento' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiResponse({ status: 200, description: 'Orçamento removido com sucesso' }),
    ApiResponse({ status: 404, description: 'Orçamento não encontrado' }),
  );
}