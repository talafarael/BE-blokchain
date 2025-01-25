import { IsInt, IsOptional } from 'class-validator';

export class CryptoQueryPageDto {
  @IsOptional()
  @IsInt()
  page?: number;
}
