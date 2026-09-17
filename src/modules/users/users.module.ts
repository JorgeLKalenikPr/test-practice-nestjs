import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/entity/users.entity';
import { USER_REPOSITORY_INTERFACE_KEY } from './repository/user-repository.key';
import { UserTypeOrmRepository } from './repository/user-repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    {
      provide: USER_REPOSITORY_INTERFACE_KEY,
      useClass: UserTypeOrmRepository,
    },
  ],
  exports: [USER_REPOSITORY_INTERFACE_KEY],
})
export class UsersModule {}