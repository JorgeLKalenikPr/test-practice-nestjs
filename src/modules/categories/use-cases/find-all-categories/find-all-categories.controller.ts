import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllCategoriesUseCase } from './find-all-categories.use-case';
import { FindAllCategoriesDocs } from './find-all-categories.swagger';

@ApiTags('Categories')
@Controller('categories')
export class FindAllCategoriesController {
  constructor(private readonly findAllCategoriesUseCase: FindAllCategoriesUseCase) {}

  @Get()
  @FindAllCategoriesDocs()
  async findAll() {
    return this.findAllCategoriesUseCase.execute();
  }
}