import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBudgetDto {
  @ApiPropertyOptional({ example: 'Alimentação - Outubro' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 1800.0 })
  @IsOptional()
  @IsNumber()
  amount?: number;
}