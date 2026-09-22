import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllTransactionsUseCase } from './find-all-transactions.use-case';
import { FindAllTransactionsDocs } from './find-all-transactions.swagger';
import { FindAllTransactionsQueryDto } from './find-all-transactions.dto';

@ApiTags('Transactions')
@Controller('transactions')
export class FindAllTransactionsController {
  constructor(private readonly findAllTransactionsUseCase: FindAllTransactionsUseCase) {}

  @Get()
  @FindAllTransactionsDocs()
  async findAll(@Query('userId') userId: string, @Query() query: FindAllTransactionsQueryDto) {
    return this.findAllTransactionsUseCase.execute({ userId, ...query });
  }
}