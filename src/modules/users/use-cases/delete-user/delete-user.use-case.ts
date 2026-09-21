import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { type IUserRepository } from '../../repository/user-repository.interface';
import { USER_REPOSITORY_INTERFACE_KEY } from '../../repository/user-repository.key';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY_INTERFACE_KEY)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.userRepository.delete(id);
  }
}