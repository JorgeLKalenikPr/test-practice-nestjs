import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function FindBudgetByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Busca um orçamento pelo id' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiResponse({ status: 200, description: 'Orçamento encontrado' }),
    ApiResponse({ status: 404, description: 'Orçamento não encontrado' }),
  );
}