import { Module } from '@nestjs/common';
import { DbFillCryptoService } from './db-fill-crypto.service';
import { DbFillCryptoController } from './db-fill-crypto.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [DbFillCryptoController],
  providers: [DbFillCryptoService, PrismaService],
})
export class DbFillCryptoModule {}
