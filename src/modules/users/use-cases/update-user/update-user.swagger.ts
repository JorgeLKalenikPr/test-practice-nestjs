import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UpdateUserDto } from './update-user.dto';

export function UpdateUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Atualiza um usuário existente' }),
    ApiParam({ name: 'id', type: String, format: 'uuid' }),
    ApiBody({ type: UpdateUserDto }),
    ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' }),
    ApiResponse({ status: 404, description: 'Usuário não encontrado' }),
  );
}