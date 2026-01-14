"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutlerConfig = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
exports.mutlerConfig = {
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== "application/pdf") {
            return cb(new common_1.BadRequestException(`${file.fieldname}:Only PDF files are allowed`), false);
        }
        cb(null, true);
    },
    limits: {
        fileSize: 2 * 1024 * 1024,
    }, storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: ((req, file, cb) => {
            const fileName = Date.now() + '-' + file.originalname;
            cb(null, fileName);
        })
    }),
};
//# sourceMappingURL=multer.config.js.map