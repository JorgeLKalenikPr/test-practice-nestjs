import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';

export function CreateCategoryDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Cria uma nova categoria' }),
    ApiBody({ type: CreateCategoryDto }),
    ApiResponse({ status: 201, description: 'Categoria criada com sucesso' }),
    ApiResponse({ status: 400, description: 'Dados inválidos' }),
  );
}