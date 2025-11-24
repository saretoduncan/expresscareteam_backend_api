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
exports.S3Services = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const win32_1 = require("path/win32");
let S3Services = class S3Services {
    configService;
    s3_client;
    bucketName;
    enpoint;
    region;
    accesskey;
    secretkey;
    url;
    constructor(configService) {
        this.configService = configService;
        this.region = this.configService.get("S3_REGION");
        this.bucketName = this.configService.get("S3_BUCKET_NAME");
        this.enpoint = this.configService.get("S3_ENDPOINT");
        this.accesskey = this.configService.get("S3_ACCESS_KEY_ID");
        this.secretkey = this.configService.get("S3_SECRET_ACCESS_KEY");
        this.url = this.configService.get("S3_URL");
        this.s3_client = new client_s3_1.S3Client({
            region: this.region,
            endpoint: this.enpoint,
            forcePathStyle: true,
            credentials: {
                accessKeyId: this.accesskey,
                secretAccessKey: this.secretkey,
            },
        });
    }
    async streamUpload(file, mimetype) {
        const key = `${Date.now()}-${(0, win32_1.extname)(file[0].originalname)}`;
        const uploaded = await this.s3_client.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: key,
            Body: file.buffer,
            ContentType: mimetype,
        }));
        console.log(uploaded);
        return `${process.env.S3_URL}/storage/v1/object/public/${process.env.S3_BUCKET_NAME}/${key}`;
    }
};
exports.S3Services = S3Services;
exports.S3Services = S3Services = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], S3Services);
//# sourceMappingURL=s3.service.js.map