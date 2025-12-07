import { Injectable } from "@nestjs/common";


@Injectable()
export class EmailService {
  private mailJet: any;
  private MAIL_API_KEY: string;
  private MAIL_API_SECRET: string;
  constructor() {
    this.MAIL_API_KEY = process.env.MAIL_API_KEY!!;
    this.MAIL_API_SECRET = process.env.MAIL_API_SECRET!!;
    const MailJet = require("node-mailjet");
    this.mailJet = MailJet.apiConnect(this.MAIL_API_KEY, this.MAIL_API_SECRET);
  }

  private async sendEmail(
    to: string,
    subject: string,
    name: string,
    message: string
  ) {
    // this.mailService
    //   .sendMail({
    //     to,

    //     subject: subject,
    //     html: message,
    //     from: `"Express Care Team" <${process.env.MAIL_USER}>`,
    //     context: { name },
    //   })
    //   .catch((err) => console.error("email job failed", err));'=
    const request = await this.mailJet
      .post("send")
      .request({
        FromEmail: process.env.MAIL_USER,
        FromName: "Express Care Team",
        Subject: subject,
        "Html-part": message,
        Recipients: [{ Email: to }],
      })
      .then((res) => res)
      .then((err) => console.log(err));
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
<p>Express Care Team</p>`;
    await this.sendEmail(to, "Password Reset", name, message);
  }
}
