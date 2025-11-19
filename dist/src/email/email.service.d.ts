import { MailerService } from "@nestjs-modules/mailer";
export declare class EmailService {
    private readonly mailService;
    constructor(mailService: MailerService);
    private sendEmail;
    sendPasswordResetCodeMail(to: string, name: string, otp: string): Promise<void>;
}
