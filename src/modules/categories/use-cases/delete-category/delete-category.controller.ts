import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteCategoryUseCase } from './delete-category.use-case';
import { DeleteCategoryDocs } from './delete-category.swagger';

@ApiTags('Categories')
@Controller('categories')
export class DeleteCategoryController {
  constructor(private readonly deleteCategoryUseCase: DeleteCategoryUseCase) {}

  @Delete(':id')
  @DeleteCategoryDocs()
  async delete(@Param('id') id: string) {
    await this.deleteCategoryUseCase.execute(id);
  }
}