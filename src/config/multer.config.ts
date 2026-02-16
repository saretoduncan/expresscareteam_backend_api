import { Request } from "express";

import { BadRequestException } from "@nestjs/common";
import { diskStorage, Options } from "multer";
export const mutlerConfig: Options = {
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

  limits: {
    fileSize: 2 * 1024 * 1024, //2MB
  },  storage:diskStorage({
    destination: './uploads',
    filename:((req,file, cb)=>{
     const fileName = Date.now() + '-' + file.originalname;
      cb(null,fileName)
    })
    
  }),
};
