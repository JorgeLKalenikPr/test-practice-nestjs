import { Inject, Injectable } from '@nestjs/common';
import { type IUserRepository } from '../../repository/user-repository.interface';
import { UserEntity } from '../../models/entity/users.entity';
import { USER_REPOSITORY_INTERFACE_KEY } from '../../repository/user-repository.key';

@Injectable()
export class FindAllUsersUseCase {
  constructor(
    @Inject(USER_REPOSITORY_INTERFACE_KEY)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }
}