import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteUserUseCase } from './delete-user.use-case';
import { DeleteUserDocs } from './delete-user.swagger';

@ApiTags('Users')
@Controller('users')
export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  @Delete(':id')
  @DeleteUserDocs()
  async delete(@Param('id') id: string) {
    await this.deleteUserUseCase.execute(id);
  }
}