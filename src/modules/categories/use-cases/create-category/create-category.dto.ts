import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Alimentação' })
  @IsString()
  @IsNotEmpty()
  name: string;
}