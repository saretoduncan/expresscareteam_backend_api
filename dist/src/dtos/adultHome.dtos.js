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
exports.AdultHomeResponseDto = exports.CreateAdultHomeDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const users_dtos_1 = require("./users.dtos");
const swagger_1 = require("@nestjs/swagger");
class CreateAdultHomeDto {
    name;
    email;
    phone;
    city;
    state;
    street;
    zipcode;
    website;
}
exports.CreateAdultHomeDto = CreateAdultHomeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the adult home facility.', example: 'Sunrise Adult Care Home' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100, { message: 'Name cannot exceed 100 characters' }),
    __metadata("design:type", String)
], CreateAdultHomeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact email address of the adult home.', example: 'info@sunrisehome.com' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid address' }),
    __metadata("design:type", String)
], CreateAdultHomeDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid phone number for the adult home.', example: '+254700111222' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[0-9+\-\s()]+$/, { message: 'Phone number contains invalid characters' }),
    (0, class_validator_1.Length)(10, 15, { message: 'Phone number must be between 10 and 15 digits' }),
    __metadata("design:type", String)
], CreateAdultHomeDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'City where the adult home is located.', example: 'Nairobi' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdultHomeDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State or region of the adult home.', example: 'Nairobi County' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdultHomeDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Street address of the adult home.', example: '123 Care Street' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdultHomeDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zipcode or postal code of the adult home location.', example: '00100' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdultHomeDto.prototype, "zipcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Optional website URL for the adult home.', example: 'https://sunrisehome.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/, { message: 'Website must be a valid URL' }),
    __metadata("design:type", String)
], CreateAdultHomeDto.prototype, "website", void 0);
let AdultHomeResponseDto = class AdultHomeResponseDto {
    id;
    email;
    name;
    phone;
    city;
    state;
    street;
    zipcode;
    website;
    reps;
};
exports.AdultHomeResponseDto = AdultHomeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier for the adult home', example: '123e4567-e89b-12d3-a456-426614174000' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact email of the adult home', example: 'info@sunrisehome.com' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the adult home facility', example: 'Sunrise Adult Care Home' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact phone number of the adult home', example: '+254700111222' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeResponseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'City where the adult home is located', example: 'Nairobi' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeResponseDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State or region of the adult home', example: 'Nairobi County' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeResponseDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Street address of the adult home', example: '123 Care Street' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeResponseDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zipcode or postal code of the adult home', example: '00100' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeResponseDto.prototype, "zipcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Website URL of the adult home, if available', example: 'https://sunrisehome.com', nullable: true }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], AdultHomeResponseDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of representatives associated with the adult home', type: [users_dtos_1.AdultHomeRepresentativeResponseDto] }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => users_dtos_1.AdultHomeRepresentativeResponseDto),
    __metadata("design:type", Array)
], AdultHomeResponseDto.prototype, "reps", void 0);
exports.AdultHomeResponseDto = AdultHomeResponseDto = __decorate([
    (0, class_transformer_1.Expose)()
], AdultHomeResponseDto);
//# sourceMappingURL=adultHome.dtos.js.map