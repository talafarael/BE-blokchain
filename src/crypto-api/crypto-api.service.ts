import { Injectable } from '@nestjs/common';
import { CreateCryptoApiDto } from './dto/create-crypto-api.dto';
import { UpdateCryptoApiDto } from './dto/update-crypto-api.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { BitcoinList } from '../bitcoin-list.data';
import { PrismaService } from 'src/prisma.service';
import { NotFoundException } from '@nestjs/common';
export interface IResponse {
  name: string;
  image: string;
  price: any;
  percentageChange: number;
}
@Injectable()
export class CryptoApiService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async getCrypto(page: number) {
    try {
      const cryptoPrices = await this.prisma.cryptoPrice.findMany({
        take: 20,
        include: {
          price: true,
        },
      });
      return cryptoPrices;
    } catch (e) {
      throw new NotFoundException(e);
    }
  }
  async getOneCrypto(crypto: string) {
    try {
      const cryptoDay = await this.prisma.cryptoPrice.findFirst({
        include: {
          price: true,
        },
      });
      if (!crypto) {
        throw new NotFoundException('crypto dont find');
      }

      const cryptoDetails = await lastValueFrom(
        this.httpService.get(
          `https://api.coingecko.com/api/v3/coins/${crypto}`,
        ),
      );
      return {
        cryptoDay,
        cryptoDetails: cryptoDetails.data,
      };
    } catch (e) {
      throw new NotFoundException(e);
    }
  }
}
