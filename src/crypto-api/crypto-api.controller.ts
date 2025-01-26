import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { CryptoApiService } from './crypto-api.service';
import { CreateCryptoApiDto } from './dto/create-crypto-api.dto';
import { UpdateCryptoApiDto } from './dto/update-crypto-api.dto';

@Controller('crypto-api')
export class CryptoApiController {
  constructor(private readonly cryptoApiService: CryptoApiService) {}

  @Get('get-crypto')
  @UsePipes(new ValidationPipe({ transform: true }))
  getCrypto(@Query('page') page: number) {
    return this.cryptoApiService.getCrypto(page || 1);
  }
  @Get('get-crypto-one')
  @UsePipes(new ValidationPipe({ transform: true }))
  getOneCrypto(@Query('crypto') crypto: string) {
    return this.cryptoApiService.getOneCrypto(crypto);
  }
}
