import { Inject, Injectable } from '@nestjs/common';
import { CategoryEntity } from '../../models/entity/category.entity';
import { CATEGORY_REPOSITORY_INTERFACE_KEY } from '../../repository/categories-repository.key';
import { type ICategoryRepository } from '../../repository/categories-repository.interface';

@Injectable()
export class FindAllCategoriesUseCase {
  constructor(
    @Inject(CATEGORY_REPOSITORY_INTERFACE_KEY)
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(): Promise<CategoryEntity[]> {
    return this.categoryRepository.findAll();
  }
}