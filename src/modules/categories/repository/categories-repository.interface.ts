import { CategoryEntity } from '../models/entity/category.entity';

export interface ICategoryRepository {
  create(category: Partial<CategoryEntity>): Promise<CategoryEntity>;
  save(category: CategoryEntity): Promise<CategoryEntity>;
  delete(id: string): Promise<void>;
}