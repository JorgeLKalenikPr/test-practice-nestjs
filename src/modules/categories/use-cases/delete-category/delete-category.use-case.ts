import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CATEGORY_REPOSITORY_INTERFACE_KEY } from '../../repository/categories-repository.key';
import { type ICategoryRepository } from '../../repository/categories-repository.interface';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(
    @Inject(CATEGORY_REPOSITORY_INTERFACE_KEY)
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException('Categoria não encontrada');
    }

    await this.categoryRepository.delete(id);
  }
}