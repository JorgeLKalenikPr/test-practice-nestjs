import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

export function FindAllBudgetsDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Lista os orçamentos de um usuário' }),
    ApiQuery({ name: 'userId', type: String, format: 'uuid', required: true }),
    ApiResponse({ status: 200, description: 'Lista de orçamentos retornada com sucesso' }),
  );
}