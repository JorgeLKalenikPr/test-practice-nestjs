import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './models/entity/category.entity';
import { CATEGORY_REPOSITORY_INTERFACE_KEY } from './repository/categories-repository.key';
import { CategoryTypeOrmRepository } from './repository/categories-repository';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [
    {
      provide: CATEGORY_REPOSITORY_INTERFACE_KEY,
      useClass: CategoryTypeOrmRepository,
    },
  ],
  exports: [CATEGORY_REPOSITORY_INTERFACE_KEY],
})
export class CategoriesModule {}