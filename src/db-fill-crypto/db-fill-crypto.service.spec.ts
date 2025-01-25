import { Test, TestingModule } from '@nestjs/testing';
import { DbFillCryptoService } from './db-fill-crypto.service';

describe('DbFillCryptoService', () => {
  let service: DbFillCryptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbFillCryptoService],
    }).compile();

    service = module.get<DbFillCryptoService>(DbFillCryptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
