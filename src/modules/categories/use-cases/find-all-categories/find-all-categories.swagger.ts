import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function FindAllCategoriesDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Lista todas as categorias' }),
    ApiResponse({ status: 200, description: 'Lista de categorias retornada com sucesso' }),
  );
}