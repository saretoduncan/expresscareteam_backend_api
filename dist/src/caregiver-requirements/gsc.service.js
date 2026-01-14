"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcsService = void 0;
const storage_1 = require("@google-cloud/storage");
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const nanoid_1 = require("nanoid");
let GcsService = class GcsService {
    storage;
    bucketName;
    bucket;
    urlExpiry;
    constructor() {
        this.storage = new storage_1.Storage();
        this.bucketName = process.env.GSC_BUCKET_NAME;
        this.bucket = this.storage.bucket(this.bucketName);
        this.urlExpiry = Number(process.env.SIGN_URL_EXPIRY_MINITES) * 60 * 1000;
    }
    async uploadFile(file) {
        const fileName = (0, nanoid_1.nanoid)(12);
        const blob = this.bucket.file(fileName);
        const blobStream = blob.createWriteStream({
            resumable: true,
            contentType: file.mimetype,
        });
        return new Promise((res, rej) => {
            (0, fs_1.createReadStream)(file.path)
                .pipe(blobStream)
                .on("error", async (err) => {
                (0, fs_1.unlinkSync)(file.path);
                rej(err);
            })
                .on("finish", async () => {
                (0, fs_1.unlinkSync)(file.path);
                res(fileName);
            });
        });
    }
    async getSignedUrl(fileName) {
        const blob = this.bucket.file(fileName);
        const [exists] = await blob.exists();
        if (!exists)
            return null;
        const [url] = await blob.getSignedUrl({
            version: "v4",
            action: "read",
            expires: Date.now() + this.urlExpiry,
        });
        return url;
    }
};
exports.GcsService = GcsService;
exports.GcsService = GcsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GcsService);
//# sourceMappingURL=gsc.service.js.map