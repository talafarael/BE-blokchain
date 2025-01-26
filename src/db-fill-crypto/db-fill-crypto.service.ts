import { Injectable } from '@nestjs/common';
import { CryptoQueryPageDto } from './dto/fill-crypto';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class DbFillCryptoService {
  constructor(private prisma: PrismaService) {}
  async fill(data: CryptoQueryPageDto) {
    try {
      const newCryptoPrice = await this.prisma.cryptoPrice.create({
        data: {
          name: data.name,
          image: data.image,
          usd: data.usd,
          price: {
            create: data.price.map(([timestamp, value]) => ({
              timestamp: timestamp,
              value: value,
            })),
          },
        },
      });
    } catch (error) {
      console.error(' error);
    }
  }
}
