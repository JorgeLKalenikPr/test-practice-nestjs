import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateTransactionDto } from './create-transaction.dto';

export function CreateTransactionDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Cria uma nova transação' }),
    ApiBody({ type: CreateTransactionDto }),
    ApiResponse({ status: 201, description: 'Transação criada com sucesso' }),
    ApiResponse({ status: 400, description: 'Dados inválidos' }),
  );
}