import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from 'src/prisma.service';
import * as jwt from 'jsonwebtoken';

require('dotenv').config();

@Injectable()
export class UserVerifyMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}
  async use(req: any, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.token;
      if (!token) {
        throw new UnauthorizedException('Token is required');
      }
      console.log(token);
      console.log(process.env.SECRET);
      const decoded = jwt.verify(token, process.env.SECRET);
      console.log(decoded);
      if (!decoded) {
        throw new UnauthorizedException('Token is required');
      }
      const user = await this.prisma.user.findFirst({
        where: {
          id: decoded.id,
        },
      });
      if (!user) {
        throw new UnauthorizedException('User not found');
      }
      req.user = user;
      req.id = decoded.id;

      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
