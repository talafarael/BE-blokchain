import { Test, TestingModule } from '@nestjs/testing';
import { CryptoApiService } from './crypto-api.service';

describe('CryptoApiService', () => {
  let service: CryptoApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptoApiService],
    }).compile();

    service = module.get<CryptoApiService>(CryptoApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
