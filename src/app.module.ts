import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoApiModule } from './crypto-api/crypto-api.module';
import { DbFillCryptoModule } from './db-fill-crypto/db-fill-crypto.module';

@Module({
  imports: [CryptoApiModule, DbFillCryptoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
