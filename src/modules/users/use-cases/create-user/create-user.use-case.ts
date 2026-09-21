import { Inject, Injectable } from '@nestjs/common';
import { type IUserRepository } from '../../repository/user-repository.interface';
import { UserEntity } from '../../models/entity/users.entity';
import { CreateUserDto } from './create-user.dto';
import { USER_REPOSITORY_INTERFACE_KEY } from '../../repository/user-repository.key';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY_INTERFACE_KEY)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(dto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.create(dto);
    return this.userRepository.save(user);
  }
}