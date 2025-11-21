"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPORARY_FILE_UPLOAD_DIR = exports.FILE_UPLOAD_DIR = void 0;
const path_1 = require("path");
exports.FILE_UPLOAD_DIR = (0, path_1.join)(process.cwd(), "uploads", "files");
exports.TEMPORARY_FILE_UPLOAD_DIR = (0, path_1.join)(process.cwd(), "uploads", "temp");
//# sourceMappingURL=constants.js.map