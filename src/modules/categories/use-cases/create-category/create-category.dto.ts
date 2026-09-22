import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Alimentação' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    example: 'uuid-do-usuario',
    description: 'Omitir para criar uma categoria global do sistema',
  })
  @IsOptional()
  @IsUUID()
  userId?: string;
}