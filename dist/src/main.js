"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
    });
    app.use(cookieParser());
    app.setGlobalPrefix("api");
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Express Care Team API")
        .setDescription("Express care team API Documentation")
        .setVersion("1.0")
        .addBearerAuth({
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        in: "header",
    })
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api-docs", app, documentFactory);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map