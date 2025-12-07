export declare class EmailService {
    private mailJet;
    private MAIL_API_KEY;
    private MAIL_API_SECRET;
    constructor();
    private sendEmail;
    sendPasswordResetCodeMail(to: string, name: string, otp: string): Promise<void>;
}
