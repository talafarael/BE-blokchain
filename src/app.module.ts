import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoApiModule } from './crypto-api/crypto-api.module';
import { DbFillCryptoModule } from './db-fill-crypto/db-fill-crypto.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CryptoApiModule, DbFillCryptoModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
