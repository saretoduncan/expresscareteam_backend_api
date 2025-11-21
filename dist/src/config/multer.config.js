"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutlerConfig = void 0;
const multer_1 = require("multer");
const constants_1 = require("../common/constants");
const common_1 = require("@nestjs/common");
exports.mutlerConfig = {
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    storage: (0, multer_1.diskStorage)({
        destination: constants_1.TEMPORARY_FILE_UPLOAD_DIR,
        filename: (req, file, cb) => {
            const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
            cb(null, `${unique}.pdf`);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== "application/pdf") {
            return cb(new common_1.BadRequestException(`${file.fieldname}:Only PDF files are allowed`), false);
        }
        cb(null, true);
    },
};
//# sourceMappingURL=multer.config.js.map