import { Inject, Injectable } from '@nestjs/common';
import { CategoryEntity } from '../../models/entity/category.entity';
import { CreateCategoryDto } from './create-category.dto';
import { CATEGORY_REPOSITORY_INTERFACE_KEY } from '../../repository/categories-repository.key';
import { type ICategoryRepository } from '../../repository/categories-repository.interface';

@Injectable()
export class CreateCategoryUseCase {
  constructor(
    @Inject(CATEGORY_REPOSITORY_INTERFACE_KEY)
    private readonly categoryRepository: ICategoryRepository
  ) {}

  async execute(dto: CreateCategoryDto): Promise<CategoryEntity> {
    const category = await this.categoryRepository.create(dto);
    return this.categoryRepository.save(category);
  }
}