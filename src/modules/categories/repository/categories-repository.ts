import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../models/entity/category.entity';
import { ICategoryRepository } from './categories-repository.interface';

@Injectable()
export class CategoryTypeOrmRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>,
  ) {}

  async create(category: Partial<CategoryEntity>): Promise<CategoryEntity> {
    return this.repository.create(category);
  }

  async save(category: CategoryEntity): Promise<CategoryEntity> {
    return this.repository.save(category);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}