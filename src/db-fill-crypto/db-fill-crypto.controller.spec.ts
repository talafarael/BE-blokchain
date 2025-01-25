import { Test, TestingModule } from '@nestjs/testing';
import { DbFillCryptoController } from './db-fill-crypto.controller';
import { DbFillCryptoService } from './db-fill-crypto.service';

describe('DbFillCryptoController', () => {
  let controller: DbFillCryptoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbFillCryptoController],
      providers: [DbFillCryptoService],
    }).compile();

    controller = module.get<DbFillCryptoController>(DbFillCryptoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
