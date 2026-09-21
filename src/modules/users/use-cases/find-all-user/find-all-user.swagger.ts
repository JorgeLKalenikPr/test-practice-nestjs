import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function FindAllUsersDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Lista todos os usuários' }),
    ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso' }),
  );
}