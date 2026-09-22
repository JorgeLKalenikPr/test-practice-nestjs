import { CategoryEntity } from '../models/entity/category.entity';

export interface ICategoryRepository {
  create(category: Partial<CategoryEntity>): Promise<CategoryEntity>;
  save(category: CategoryEntity): Promise<CategoryEntity>;
  findById(id: string): Promise<CategoryEntity | null>;
  findAllForUser(userId: string): Promise<CategoryEntity[]>;
  delete(id: string): Promise<void>;
}