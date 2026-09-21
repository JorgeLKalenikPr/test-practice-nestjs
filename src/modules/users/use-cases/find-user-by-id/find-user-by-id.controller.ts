import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindUserByIdUseCase } from './find-user-by-id.use-case';
import { FindUserByIdDocs } from './find-user-by-id.swagger';

@ApiTags('Users')
@Controller('users')
export class FindUserByIdController {
  constructor(private readonly findUserByIdUseCase: FindUserByIdUseCase) {}

  @Get(':id')
  @FindUserByIdDocs()
  async findById(@Param('id') id: string) {
    return this.findUserByIdUseCase.execute(id);
  }
}