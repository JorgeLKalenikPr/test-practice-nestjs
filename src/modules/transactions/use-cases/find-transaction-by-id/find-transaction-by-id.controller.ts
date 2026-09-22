import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindTransactionByIdUseCase } from './find-transaction-by-id.use-case';
import { FindTransactionByIdDocs } from './find-transaction-by-id.swagger';

@ApiTags('Transactions')
@Controller('transactions')
export class FindTransactionByIdController {
  constructor(private readonly findTransactionByIdUseCase: FindTransactionByIdUseCase) {}

  @Get(':id')
  @FindTransactionByIdDocs()
  async findById(@Param('id') id: string) {
    return this.findTransactionByIdUseCase.execute(id);
  }
}