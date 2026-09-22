import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteTransactionUseCase } from './delete-transaction.use-case';
import { DeleteTransactionDocs } from './delete-transaction.swagger';

@ApiTags('Transactions')
@Controller('transactions')
export class DeleteTransactionController {
  constructor(private readonly deleteTransactionUseCase: DeleteTransactionUseCase) {}

  @Delete(':id')
  @DeleteTransactionDocs()
  async delete(@Param('id') id: string) {
    await this.deleteTransactionUseCase.execute(id);
  }
}