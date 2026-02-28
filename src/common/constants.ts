import { join } from "path";

export const FILE_UPLOAD_DIR = join(process.cwd(), "uploads", "files");
export const TEMPORARY_FILE_UPLOAD_DIR = join(process.cwd(), "uploads", "temp");
export const SESSION_EXPIRY = "SESSION_EXPIRY"
