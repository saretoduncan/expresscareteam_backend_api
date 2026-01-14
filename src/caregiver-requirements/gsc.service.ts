import { Bucket, Storage } from "@google-cloud/storage";
import { Injectable, NotFoundException } from "@nestjs/common";
import { createReadStream, unlink, unlinkSync } from "fs";
import { customAlphabet, nanoid } from "nanoid";

@Injectable()
export class GcsService {
  private storage: Storage;
  private bucketName: string;
  private bucket: Bucket;
  private urlExpiry: number;

  constructor() {
    this.storage = new Storage();
    this.bucketName = process.env.GSC_BUCKET_NAME!!;
    this.bucket = this.storage.bucket(this.bucketName);
    this.urlExpiry = Number(process.env.SIGN_URL_EXPIRY_MINITES!!) * 60 * 1000;
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const fileName = nanoid(12);
    const blob = this.bucket.file(fileName);
    const blobStream = blob.createWriteStream({
      resumable: true,
      contentType: file.mimetype,
    });

    return new Promise((res, rej) => {
      createReadStream(file.path)
        .pipe(blobStream)
        .on("error", async (err) => {
          unlinkSync(file.path);
          rej(err);
        })
        .on("finish", async () => {
          unlinkSync(file.path);
          res(fileName);
        });
    });
  }
  async getSignedUrl(fileName: string): Promise<string | null> {
    const blob = this.bucket.file(fileName);
    const [exists] = await blob.exists();
    if (!exists) return null;
    const [url] = await blob.getSignedUrl({
      version: "v4",
      action: "read",
      expires: Date.now() + this.urlExpiry,
    });
    return url;
  }
}
