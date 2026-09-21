import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function GetBudgetProgressDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Compara o valor orçado com o gasto real no período' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiResponse({ status: 200, description: 'Progresso do orçamento calculado com sucesso' }),
    ApiResponse({ status: 404, description: 'Orçamento não encontrado' }),
  );
}