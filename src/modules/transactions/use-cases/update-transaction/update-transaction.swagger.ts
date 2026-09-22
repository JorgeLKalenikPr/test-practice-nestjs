import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UpdateTransactionDto } from './update-transaction.dto';

export function UpdateTransactionDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Atualiza uma transação existente' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiBody({ type: UpdateTransactionDto }),
    ApiResponse({ status: 200, description: 'Transação atualizada com sucesso' }),
    ApiResponse({ status: 404, description: 'Transação não encontrada' }),
  );
}