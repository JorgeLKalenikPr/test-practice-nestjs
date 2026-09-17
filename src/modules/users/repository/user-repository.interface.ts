import { UserEntity } from '../models/entity/users.entity';

export interface IUserRepository {
  create(user: Partial<UserEntity>): Promise<UserEntity>;
  save(user: UserEntity): Promise<UserEntity>;
  delete(id: string): Promise<void>;
}