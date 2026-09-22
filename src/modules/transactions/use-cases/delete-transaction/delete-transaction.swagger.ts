import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function DeleteTransactionDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Remove uma transação' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiResponse({ status: 200, description: 'Transação removida com sucesso' }),
    ApiResponse({ status: 404, description: 'Transação não encontrada' }),
  );
}