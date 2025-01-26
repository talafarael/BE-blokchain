import { UserService } from './user.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Req,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  Query,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import * as Multer from 'multer';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { Request } from 'express';

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // No larger than 5mb
  },
});
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('change-icon')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'mainImg', maxCount: 1 }], {
      storage: Multer.memoryStorage(),
    }),
  )
  createCategory(
    @UploadedFiles() file: { mainImg?: Multer.File },
    @Req() req: any,
  ) {
    return this.userService.changeIcon(file, req);
  }
}
