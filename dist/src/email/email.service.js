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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
let EmailService = class EmailService {
    mailJet;
    MAIL_API_KEY;
    MAIL_API_SECRET;
    constructor() {
        this.MAIL_API_KEY = process.env.MAIL_API_KEY;
        this.MAIL_API_SECRET = process.env.MAIL_API_SECRET;
        const MailJet = require("node-mailjet");
        this.mailJet = MailJet.apiConnect(this.MAIL_API_KEY, this.MAIL_API_SECRET);
    }
    async sendEmail(to, subject, name, message) {
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
    async sendPasswordResetCodeMail(to, name, otp) {
        const message = `<p>Hi ${name},</p>

<p>We received a request to reset your Express Care Team account password. Please use the OTP below to proceed:</p>

<strong style="color:green; font-size:30px;">${otp}</strong>

<p>This code will expire in 10 minutes.</p>

<p>Thank you,</p>
<p>Express Care Team</p>`;
        await this.sendEmail(to, "Password Reset", name, message);
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmailService);
//# sourceMappingURL=email.service.js.map