import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryUseCase } from './create-category.use-case';
import { CreateCategoryDto } from './create-category.dto';
import { CreateCategoryDocs } from './create-category.swagger';

@ApiTags('Categories')
@Controller('categories')
export class CreateCategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  @Post()
  @CreateCategoryDocs()
  async create(@Body() dto: CreateCategoryDto) {
    return this.createCategoryUseCase.execute(dto);
  }
}