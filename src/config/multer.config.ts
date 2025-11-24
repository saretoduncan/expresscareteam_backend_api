import { diskStorage, memoryStorage } from "multer";
import { Request } from "express";

import { BadRequestException } from "@nestjs/common";
export const mutlerConfig = {
  limits: {
    fileSize: 2 * 1024 * 1024, //2MB
  },
  storage: memoryStorage(),
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, acceptFile: boolean) => void
  ) => {
    if (file.mimetype !== "application/pdf") {
      return cb(
        new BadRequestException(`${file.fieldname}:Only PDF files are allowed`),
        false
      );
    }
    cb(null, true);
  },
};
