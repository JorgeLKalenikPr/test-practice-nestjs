import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UpdateCategoryDto } from './update-category.dto';

export function UpdateCategoryDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Atualiza uma categoria existente' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiBody({ type: UpdateCategoryDto }),
    ApiResponse({ status: 200, description: 'Categoria atualizada com sucesso' }),
    ApiResponse({ status: 404, description: 'Categoria não encontrada' }),
  );
}