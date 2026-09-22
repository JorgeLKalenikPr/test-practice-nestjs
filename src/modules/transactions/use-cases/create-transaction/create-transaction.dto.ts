import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { TransactionType } from '../../models/entity/transactions.entity';

export class CreateTransactionDto {
  @ApiProperty({ example: 'Compra no mercado' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 250.5 })
  @IsNumber()
  amount: number;

  @ApiProperty({ enum: TransactionType, example: TransactionType.EXPENSE })
  @IsEnum(TransactionType)
  type: TransactionType;

  @ApiProperty({ example: '2026-09-21' })
  @IsDateString()
  transactionDate: Date;

  @ApiProperty({ example: 'uuid-do-usuario' })
  @IsUUID()
  userId: string;

  @ApiPropertyOptional({ example: 'uuid-da-categoria' })
  @IsOptional()
  @IsUUID()
  categoryId?: string | null;
}