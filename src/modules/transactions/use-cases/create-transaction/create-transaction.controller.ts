import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTransactionUseCase } from './create-transaction.use-case';
import { CreateTransactionDto } from './create-transaction.dto';
import { CreateTransactionDocs } from './create-transaction.swagger';

@ApiTags('Transactions')
@Controller('transactions')
export class CreateTransactionController {
  constructor(private readonly createTransactionUseCase: CreateTransactionUseCase) {}

  @Post()
  @CreateTransactionDocs()
  async create(@Body() dto: CreateTransactionDto) {
    return this.createTransactionUseCase.execute(dto);
  }
}