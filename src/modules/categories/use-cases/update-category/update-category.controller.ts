import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCategoryUseCase } from './update-category.use-case';
import { UpdateCategoryDto } from './update-category.dto';
import { UpdateCategoryDocs } from './update-category.swagger';

@ApiTags('Categories')
@Controller('categories')
export class UpdateCategoryController {
  constructor(private readonly updateCategoryUseCase: UpdateCategoryUseCase) {}

  @Put(':id')
  @UpdateCategoryDocs()
  async update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
    return this.updateCategoryUseCase.execute(id, dto);
  }
}