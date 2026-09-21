import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CategoryEntity } from '../../models/entity/category.entity';
import { UpdateCategoryDto } from './update-category.dto';
import { CATEGORY_REPOSITORY_INTERFACE_KEY } from '../../repository/categories-repository.key';
import { type ICategoryRepository } from '../../repository/categories-repository.interface';

@Injectable()
export class UpdateCategoryUseCase {
  constructor(
    @Inject(CATEGORY_REPOSITORY_INTERFACE_KEY)
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(id: string, dto: UpdateCategoryDto): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException('Categoria não encontrada');
    }

    Object.assign(category, dto);
    return this.categoryRepository.save(category);
  }
}