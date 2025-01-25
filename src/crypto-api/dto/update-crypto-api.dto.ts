import { PartialType } from '@nestjs/mapped-types';
import { CreateCryptoApiDto } from './create-crypto-api.dto';

export class UpdateCryptoApiDto extends PartialType(CreateCryptoApiDto) {}
