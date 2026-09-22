import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { TransactionType } from '../../models/entity/transactions.entity';

export class UpdateTransactionDto {
  @ApiPropertyOptional({ example: 'Compra no mercado' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 250.5 })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiPropertyOptional({ enum: TransactionType })
  @IsOptional()
  @IsEnum(TransactionType)
  type?: TransactionType;

  @ApiPropertyOptional({ example: '2026-09-21' })
  @IsOptional()
  @IsDateString()
  transactionDate?: string;

  @ApiPropertyOptional({ example: 'uuid-da-categoria' })
  @IsOptional()
  @IsUUID()
  categoryId?: string | null;
}