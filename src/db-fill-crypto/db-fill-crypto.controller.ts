import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DbFillCryptoService } from './db-fill-crypto.service';
import { CryptoQueryPageDto } from './dto/fill-crypto';

@Controller('db-fill-crypto')
export class DbFillCryptoController {
  constructor(private readonly dbFillCryptoService: DbFillCryptoService) {}

  @Post('create-crypto')
  @UsePipes(new ValidationPipe({ transform: true }))
  createCrypto(@Body() dto: CryptoQueryPageDto) {
    return this.dbFillCryptoService.fill(dto);
  }
}
