import { Injectable } from '@nestjs/common';
import { CryptoQueryPageDto } from './dto/fill-crypto';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class DbFillCryptoService {
  constructor(private prisma: PrismaService) {}
  async fill(data: CryptoQueryPageDto) {
    try {
      const oldPrice = data.price[0][1];
      const newPrice = data.price[data.price.length - 1][1];
      const percentageChange = ((newPrice - oldPrice) / oldPrice) * 100;
      const newCryptoPrice = await this.prisma.cryptoPrice.create({
        data: {
          name: data.name,
          image: data.image,
          usd: data.usd,
          price_change_percentage_week: percentageChange,
          price: {
            create: data.price.map(([timestamp, value]) => ({
              timestamp: timestamp,
              value: value,
            })),
          },
        },
      });
      console.log('Data successfully inserted:', newCryptoPrice);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  }
}
