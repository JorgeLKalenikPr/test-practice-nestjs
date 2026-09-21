import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllUsersUseCase } from './find-all-user.use-case';
import { FindAllUsersDocs } from './find-all-user.swagger';

@ApiTags('Users')
@Controller('users')
export class FindAllUsersController {
  constructor(private readonly findAllUsersUseCase: FindAllUsersUseCase) {}

  @Get()
  @FindAllUsersDocs()
  async findAll() {
    return this.findAllUsersUseCase.execute();
  }
}