import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from './create-user.use-case';
import { CreateUserDto } from './create-user.dto';
import { CreateUserDocs } from './create-user.swagger';

@ApiTags('Users')
@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @CreateUserDocs()
  async create(@Body() dto: CreateUserDto) {
    return this.createUserUseCase.execute(dto);
  }
}