import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateTransactionUseCase } from './update-transaction.use-case';
import { UpdateTransactionDto } from './update-transaction.dto';
import { UpdateTransactionDocs } from './update-transaction.swagger';

@ApiTags('Transactions')
@Controller('transactions')
export class UpdateTransactionController {
  constructor(private readonly updateTransactionUseCase: UpdateTransactionUseCase) {}

  @Put(':id')
  @UpdateTransactionDocs()
  async update(@Param('id') id: string, @Body() dto: UpdateTransactionDto) {
    return this.updateTransactionUseCase.execute(id, dto);
  }
}