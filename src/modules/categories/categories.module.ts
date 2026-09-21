import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './models/entity/category.entity';

import { CreateCategoryUseCase } from './use-cases/create-category/create-category.use-case';
import { CreateCategoryController } from './use-cases/create-category/create-category.controller';
import { FindAllCategoriesUseCase } from './use-cases/find-all-categories/find-all-categories.use-case';
import { FindAllCategoriesController } from './use-cases/find-all-categories/find-all-categories.controller';
import { FindCategoryByIdUseCase } from './use-cases/find-category-by-id/find-category-by-id.use-case';
import { FindCategoryByIdController } from './use-cases/find-category-by-id/find-category-by-id.controller';
import { UpdateCategoryUseCase } from './use-cases/update-category/update-category.use-case';
import { UpdateCategoryController } from './use-cases/update-category/update-category.controller';
import { DeleteCategoryUseCase } from './use-cases/delete-category/delete-category.use-case';
import { DeleteCategoryController } from './use-cases/delete-category/delete-category.controller';
import { CATEGORY_REPOSITORY_INTERFACE_KEY } from './repository/categories-repository.key';
import { CategoryTypeOrmRepository } from './repository/categories-repository';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [
    CreateCategoryController,
    FindAllCategoriesController,
    FindCategoryByIdController,
    UpdateCategoryController,
    DeleteCategoryController,
  ],
  providers: [
    {
      provide: CATEGORY_REPOSITORY_INTERFACE_KEY,
      useClass: CategoryTypeOrmRepository,
    },
    CreateCategoryUseCase,
    FindAllCategoriesUseCase,
    FindCategoryByIdUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
  ],
  exports: [CATEGORY_REPOSITORY_INTERFACE_KEY],
})
export class CategoriesModule {}