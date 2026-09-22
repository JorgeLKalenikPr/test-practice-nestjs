import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function FindTransactionByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Busca uma transação pelo id' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiResponse({ status: 200, description: 'Transação encontrada' }),
    ApiResponse({ status: 404, description: 'Transação não encontrada' }),
  );
}