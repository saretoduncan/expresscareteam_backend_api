import { ConfigService } from "@nestjs/config";
export declare class S3Services {
    private readonly configService;
    private readonly s3_client;
    private readonly bucketName;
    private readonly enpoint;
    private readonly region;
    private readonly accesskey;
    private readonly secretkey;
    private readonly url;
    constructor(configService: ConfigService);
    streamUpload(file: Express.Multer.File, mimetype: string): Promise<string>;
}
