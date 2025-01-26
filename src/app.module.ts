import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoApiModule } from './crypto-api/crypto-api.module';
import { DbFillCryptoModule } from './db-fill-crypto/db-fill-crypto.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserVerifyMiddleware } from './user-verify/user-verify.middleware';
import { PrismaModule } from './prisma.module';
@Module({
  imports: [
    CryptoApiModule,
    DbFillCryptoModule,
    AuthModule,
    UserModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserVerifyMiddleware).forRoutes('user');
  }
}
