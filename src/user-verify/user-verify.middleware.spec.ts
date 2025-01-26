import { UserVerifyMiddleware } from './user-verify.middleware';

describe('UserVerifyMiddleware', () => {
  it('should be defined', () => {
    expect(new UserVerifyMiddleware()).toBeDefined();
  });
});
