import { Request } from "express";
export declare const mutlerConfig: {
    limits: {
        fileSize: number;
    };
    storage: import("multer").StorageEngine;
    fileFilter: (req: Request, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => void;
};
