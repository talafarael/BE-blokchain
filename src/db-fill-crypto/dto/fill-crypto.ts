import { IsInt, IsOptional, IsArray, IsString } from 'class-validator';

export class CryptoQueryPageDto {
  @IsString()
  name: string;

  @IsString()
  image: string;
  @IsString()
  usd: string;

  @IsArray()
  @IsArray({ each: true })
  price: number[][];
}
