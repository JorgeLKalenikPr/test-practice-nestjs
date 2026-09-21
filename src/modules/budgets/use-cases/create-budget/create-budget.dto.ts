import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateBudgetDto {
  @ApiProperty({ example: 'Alimentação - Outubro' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1500.0 })
  @IsNumber()
  amount: number;

  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(1)
  @Max(12)
  month: number;

  @ApiProperty({ example: 2026 })
  @IsInt()
  year: number;

  @ApiProperty({ example: 'uuid-do-usuario' })
  @IsUUID()
  userId: string;

  @ApiPropertyOptional({ example: 'uuid-da-categoria' })
  @IsOptional()
  @IsUUID()
  categoryId?: string | null;
}