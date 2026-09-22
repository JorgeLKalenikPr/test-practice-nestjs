import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
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

  async findById(id: string): Promise<CategoryEntity | null> {
    return this.repository.findOneBy({ id });
  }

  async findAllForUser(userId: string): Promise<CategoryEntity[]> {
    return this.repository.find({
      where: [{ userId: IsNull() }, { userId }],
      order: { name: 'ASC' },
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}