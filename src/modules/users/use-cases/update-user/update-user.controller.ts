import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserUseCase } from './update-user.use-case';
import { UpdateUserDto } from './update-user.dto';
import { UpdateUserDocs } from './update-user.swagger';

@ApiTags('Users')
@Controller('users')
export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

  @Put(':id')
  @UpdateUserDocs()
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.updateUserUseCase.execute(id, dto);
  }
}