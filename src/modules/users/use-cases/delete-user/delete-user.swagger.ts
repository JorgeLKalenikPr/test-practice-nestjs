import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function DeleteUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Remove um usuário' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiResponse({ status: 200, description: 'Usuário removido com sucesso' }),
    ApiResponse({ status: 404, description: 'Usuário não encontrado' }),
  );
}