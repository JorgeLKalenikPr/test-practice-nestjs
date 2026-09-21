import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/entity/users.entity';

import { CreateUserUseCase } from './use-cases/create-user/create-user.use-case';
import { CreateUserController } from './use-cases/create-user/create-user.controller';
import { FindUserByIdUseCase } from './use-cases/find-user-by-id/find-user-by-id.use-case';
import { FindUserByIdController } from './use-cases/find-user-by-id/find-user-by-id.controller';
import { UpdateUserUseCase } from './use-cases/update-user/update-user.use-case';
import { UpdateUserController } from './use-cases/update-user/update-user.controller';
import { DeleteUserUseCase } from './use-cases/delete-user/delete-user.use-case';
import { DeleteUserController } from './use-cases/delete-user/delete-user.controller';
import { FindAllUsersController } from './use-cases/find-all-user/find-all-user.controller';
import { USER_REPOSITORY_INTERFACE_KEY } from './repository/user-repository.key';
import { UserTypeOrmRepository } from './repository/user-repository';
import { FindAllUsersUseCase } from './use-cases/find-all-user/find-all-user.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [
    CreateUserController,
    FindAllUsersController,
    FindUserByIdController,
    UpdateUserController,
    DeleteUserController,
  ],
  providers: [
    {
      provide: USER_REPOSITORY_INTERFACE_KEY,
      useClass: UserTypeOrmRepository,
    },
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindUserByIdUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
  exports: [USER_REPOSITORY_INTERFACE_KEY],
})
export class UsersModule {}