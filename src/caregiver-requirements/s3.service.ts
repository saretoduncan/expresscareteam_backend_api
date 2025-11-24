import { PutObjectCommand, S3, S3Client } from "@aws-sdk/client-s3";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { randomBytes } from "crypto";
import { extname } from "path/win32";
import { Readable } from "stream";

@Injectable()
export class S3Services {
  private readonly s3_client: S3Client;
  private readonly bucketName: string;
  private readonly enpoint: string;
  private readonly region: string;
  private readonly accesskey: string;
  private readonly secretkey: string;
  private readonly url: string;

  constructor(private readonly configService: ConfigService) {
    this.region = this.configService.get<string>("S3_REGION")!!;
    this.bucketName = this.configService.get<string>("S3_BUCKET_NAME")!!;
    this.enpoint = this.configService.get<string>("S3_ENDPOINT")!!;
    this.accesskey = this.configService.get<string>("S3_ACCESS_KEY_ID")!!;
    this.secretkey = this.configService.get<string>("S3_SECRET_ACCESS_KEY")!!;
    this.url = this.configService.get<string>("S3_URL")!!;
    this.s3_client = new S3Client({
      region: this.region,
      endpoint: this.enpoint,
      forcePathStyle: true,
      credentials: {
        accessKeyId: this.accesskey,
        secretAccessKey: this.secretkey,
      },
    });
  }

  async streamUpload(file: Express.Multer.File, mimetype: string) {
    // const fileStream = this.toWebReadble(file.stream)

    const key = `${Date.now()}-${extname(file[0].originalname)}`;
    const uploaded = await this.s3_client.send(
      new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
        Body: file.buffer,
        ContentType: mimetype,
      })
    );
    console.log(uploaded);
    return `${process.env.S3_URL}/storage/v1/object/public/${process.env.S3_BUCKET_NAME}/${key}`;
  }
}
