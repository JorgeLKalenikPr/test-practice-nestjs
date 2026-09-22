import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { type IUserRepository } from '../../../users/repository/user-repository.interface';
import { USER_REPOSITORY_INTERFACE_KEY } from '../../../users/repository/user-repository.key';
import { CategoryEntity } from '../../models/entity/category.entity';
import { CreateCategoryDto } from './create-category.dto';
import { CATEGORY_REPOSITORY_INTERFACE_KEY } from '../../repository/categories-repository.key';
import { type ICategoryRepository } from '../../repository/categories-repository.interface';

@Injectable()
export class CreateCategoryUseCase {
  constructor(
    @Inject(CATEGORY_REPOSITORY_INTERFACE_KEY)
    private readonly categoryRepository: ICategoryRepository,
    @Inject(USER_REPOSITORY_INTERFACE_KEY)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(dto: CreateCategoryDto): Promise<CategoryEntity> {
    if (dto.userId) {
      const user = await this.userRepository.findById(dto.userId);
      if (!user) {
        throw new BadRequestException('Usuário informado não existe');
      }
    }

    const category = await this.categoryRepository.create(dto);
    return this.categoryRepository.save(category);
  }
}