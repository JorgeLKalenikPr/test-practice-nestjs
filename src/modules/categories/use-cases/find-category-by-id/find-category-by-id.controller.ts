import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindCategoryByIdUseCase } from './find-category-by-id.use-case';
import { FindCategoryByIdDocs } from './find-category-by-id.swagger';

@ApiTags('Categories')
@Controller('categories')
export class FindCategoryByIdController {
  constructor(private readonly findCategoryByIdUseCase: FindCategoryByIdUseCase) {}

  @Get(':id')
  @FindCategoryByIdDocs()
  async findById(@Param('id') id: string) {
    return this.findCategoryByIdUseCase.execute(id);
  }
}