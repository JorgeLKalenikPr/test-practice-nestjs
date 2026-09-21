import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function FindCategoryByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Busca uma categoria pelo id' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiResponse({ status: 200, description: 'Categoria encontrada' }),
    ApiResponse({ status: 404, description: 'Categoria não encontrada' }),
  );
}