import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

export function FindAllCategoriesDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Lista todas as categorias' }),
    ApiQuery({ name: 'userId', required: true }),
    ApiResponse({ status: 200, description: 'Lista de categorias retornada com sucesso' }),
  );
}