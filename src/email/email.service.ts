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
    this.mailService
      .sendMail({
        to,

        subject: subject,
        html: message,
        from: `"Express Care Team" <${process.env.MAIL_USER}>`,
        context: { name },
      })
      .catch((err) => console.error("email job failed", err));
  }
  async sendPasswordResetCodeMail(
    to: string,

    name: string,
    otp: string
  ) {
    const message = `<p>Hi ${name},</p>

<p>We received a request to reset your Express Care Team account password. Please use the OTP below to proceed:</p>

<strong style="color:green; font-size:30px;">${otp}</strong>

<p>This code will expire in 10 minutes.</p>

<p>Thank you,</p>
<p>Express Care Team</p>

    `;
    await this.sendEmail(to, "Password Reset", name, message);
  }
}
