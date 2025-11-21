import { diskStorage, memoryStorage } from "multer";
import { Request } from "express";
import {
  FILE_UPLOAD_DIR,
  TEMPORARY_FILE_UPLOAD_DIR,
} from "src/common/constants";
import { BadRequestException } from "@nestjs/common";
export const mutlerConfig = {
  limits: {
    fileSize: 2 * 1024 * 1024, //2MB
  },
  storage: diskStorage({
    destination: TEMPORARY_FILE_UPLOAD_DIR,
    filename: (req, file, cb) => {
      const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, `${unique}.pdf`);
    },
  }),

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
