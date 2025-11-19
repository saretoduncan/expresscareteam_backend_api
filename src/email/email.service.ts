import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailService {
  constructor(private readonly mailService: MailerService) {}

  private async sendEmail(
    to: string,
    subject: string,
    name: string,
    message: string
  ) {
    await this.mailService.sendMail({
      to,
      subject: subject,
      html: message,
    });
  }
  async sendPasswordResetCodeMail(
    to: string,

    name: string,
    otp: string
  ) {
    const message = `<h1>Hi ${name}</h1>
    <p>We received a request to reset your Express Care Team Account password.<p>
    <br><br>
    <strong style="color:green; font-size:30px;">${otp}</strong>
    <br><br>
    <p>If you don't use this code within 10 minutes, it will expire.</p>
    <br><br>
    <p>Thanks,</p>
    <br><br>
    <p>Express Care Team</p>

    `;
    await this.sendEmail(to, "Password Reset", name, message);
  }
}
