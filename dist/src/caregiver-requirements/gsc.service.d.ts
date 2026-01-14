export declare class GcsService {
    private storage;
    private bucketName;
    private bucket;
    private urlExpiry;
    constructor();
    uploadFile(file: Express.Multer.File): Promise<string>;
    getSignedUrl(fileName: string): Promise<string | null>;
}
