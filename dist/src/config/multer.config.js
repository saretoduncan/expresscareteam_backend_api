"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutlerConfig = void 0;
const multer_1 = require("multer");
const common_1 = require("@nestjs/common");
exports.mutlerConfig = {
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    storage: (0, multer_1.memoryStorage)(),
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== "application/pdf") {
            return cb(new common_1.BadRequestException(`${file.fieldname}:Only PDF files are allowed`), false);
        }
        cb(null, true);
    },
};
//# sourceMappingURL=multer.config.js.map