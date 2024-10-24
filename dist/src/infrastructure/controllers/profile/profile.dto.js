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
exports.UpdateProfileDto = exports.CreateProfileDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateProfileDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "fullname", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Date)
], CreateProfileDto.prototype, "reminder_time", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "flexibility_level", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "stretching_time", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "goal", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "discomfort_areas", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], CreateProfileDto.prototype, "user", void 0);
exports.CreateProfileDto = CreateProfileDto;
class UpdateProfileDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "fullname", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], UpdateProfileDto.prototype, "reminder_time", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Array)
], UpdateProfileDto.prototype, "flexibility_level", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Array)
], UpdateProfileDto.prototype, "stretching_time", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Array)
], UpdateProfileDto.prototype, "goal", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Array)
], UpdateProfileDto.prototype, "discomfort_areas", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], UpdateProfileDto.prototype, "user", void 0);
exports.UpdateProfileDto = UpdateProfileDto;
//# sourceMappingURL=profile.dto.js.map