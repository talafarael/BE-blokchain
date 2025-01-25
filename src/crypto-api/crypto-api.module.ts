import { Module } from '@nestjs/common';
import { CryptoApiService } from './crypto-api.service';
import { CryptoApiController } from './crypto-api.controller';
import { PrismaService } from '../prisma.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [CryptoApiController],
  providers: [CryptoApiService, PrismaService],
})
export class CryptoApiModule {}
