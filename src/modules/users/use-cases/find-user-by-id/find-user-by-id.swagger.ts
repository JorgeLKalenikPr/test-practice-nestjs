import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function FindUserByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Busca um usuário pelo id' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiResponse({ status: 200, description: 'Usuário encontrado' }),
    ApiResponse({ status: 404, description: 'Usuário não encontrado' }),
  );
}