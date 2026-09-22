  import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

export function FindAllTransactionsDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Lista transações de um usuário com filtros opcionais' }),
    ApiResponse({ status: 200, description: 'Lista de transações retornada com sucesso' }),
  );
}