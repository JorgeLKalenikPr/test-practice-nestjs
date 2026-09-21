import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function DeleteCategoryDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Remove uma categoria' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiResponse({ status: 200, description: 'Categoria removida com sucesso' }),
    ApiResponse({ status: 404, description: 'Categoria não encontrada' }),
  );
}