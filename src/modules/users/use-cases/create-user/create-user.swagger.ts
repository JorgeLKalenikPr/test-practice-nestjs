import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export function CreateUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Cria um novo usuário' }),
    ApiBody({ type: CreateUserDto }),
    ApiResponse({ status: 201, description: 'Usuário criado com sucesso' }),
    ApiResponse({ status: 400, description: 'Dados inválidos' }),
  );
}