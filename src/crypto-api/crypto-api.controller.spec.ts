import { Test, TestingModule } from '@nestjs/testing';
import { CryptoApiController } from './crypto-api.controller';
import { CryptoApiService } from './crypto-api.service';

describe('CryptoApiController', () => {
  let controller: CryptoApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CryptoApiController],
      providers: [CryptoApiService],
    }).compile();

    controller = module.get<CryptoApiController>(CryptoApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
