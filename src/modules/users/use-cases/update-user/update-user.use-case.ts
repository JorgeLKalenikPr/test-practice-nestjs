import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { type IUserRepository } from '../../repository/user-repository.interface';
import { UserEntity } from '../../models/entity/users.entity';
import { UpdateUserDto } from './update-user.dto';
import { USER_REPOSITORY_INTERFACE_KEY } from '../../repository/user-repository.key';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY_INTERFACE_KEY)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: string, dto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    Object.assign(user, dto);
    return this.userRepository.save(user);
  }
}