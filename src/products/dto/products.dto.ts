import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';


export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}