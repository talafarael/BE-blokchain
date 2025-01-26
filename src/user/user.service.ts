import { Injectable } from '@nestjs/common';
const S3 = require('aws-sdk/clients/s3');
import * as Multer from 'multer';
import { uploadFile } from '../utils/aws-bucket';
import { Request } from 'express';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async changeIcon(file: Multer.File, req: any) {
    if (!file) {
      throw new Error('Файл не передано');
    }

    if (!req.id) {
      throw new Error('Некоректний запит: відсутній id користувача');
    }

    try {
      console.log(file.mainImg[0]);
      const link = await uploadFile(file.mainImg[0]);
      console.log(link);
      const user = await this.prisma.user.update({
        where: { id: req.id },
        data: { iconImg: link },
      });

      return { user };
    } catch (error) {
      console.error('Помилка зміни іконки:', error);
      throw new Error('Не вдалося змінити іконку');
    }
  }
}
