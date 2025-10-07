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
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let AllExceptionsFilter = class AllExceptionsFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
    }
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        let errors = undefined;
        const isProd = process.env.NODE_ENV === 'production';
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const res = exception.getResponse();
            if (typeof res === 'string') {
                message = res;
            }
            else if (typeof res === 'object' && res !== null) {
                const r = res;
                if (r.message) {
                    if (Array.isArray(r.message)) {
                        message = 'Validation failed';
                        if (!isProd)
                            errors = r.message;
                    }
                    else {
                        message = r.message;
                    }
                }
                if (r.error && !errors && !isProd) {
                    errors = r.error;
                }
            }
        }
        else {
            if (isProd) {
                status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
                message = 'Internal server error';
                console.error(exception);
            }
            else {
                status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
                if (exception && typeof exception === 'object') {
                    const ex = exception;
                    message = ex.message || ex.detail || 'Internal server error';
                    errors = ex.errors || ex.detail || undefined;
                }
                else if (typeof exception === 'string') {
                    message = exception;
                }
                console.error(exception);
            }
        }
        const responseBody = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request === null || request === void 0 ? void 0 : request.url,
            method: request === null || request === void 0 ? void 0 : request.method,
            message,
        };
        if (!isProd && errors)
            responseBody.errors = errors;
        if (!isProd && (exception === null || exception === void 0 ? void 0 : exception.stack))
            responseBody.stack = exception.stack;
        httpAdapter.reply(response, responseBody, status);
    }
};
AllExceptionsFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=global-exception-handler.js.map