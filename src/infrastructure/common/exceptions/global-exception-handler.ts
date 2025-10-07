import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Default values
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: any = 'Internal server error';
    let errors: any = undefined;
    const isProd = process.env.NODE_ENV === 'production';

    // If this is a Nest HttpException, expose its status and message (but no stack in prod)
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();

      if (typeof res === 'string') {
        message = res;
      } else if (typeof res === 'object' && res !== null) {
        const r: any = res;
        if (r.message) {
          if (Array.isArray(r.message)) {
            message = 'Validation failed';
            if (!isProd) errors = r.message;
          } else {
            message = r.message;
          }
        }
        if (r.error && !errors && !isProd) {
          errors = r.error;
        }
      }
    } else {
      // Non-Http errors: in production hide details, in other modes expose stack/message
      if (isProd) {
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message = 'Internal server error';
        // log internal details server-side
        // eslint-disable-next-line no-console
        console.error(exception);
      } else {
        // development / test: surface full error
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        if (exception && typeof exception === 'object') {
          const ex: any = exception;
          message = ex.message || ex.detail || 'Internal server error';
          errors = ex.errors || ex.detail || undefined;
        } else if (typeof exception === 'string') {
          message = exception;
        }
        // Also log
        // eslint-disable-next-line no-console
        console.error(exception);
      }
    }

    const responseBody: any = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request?.url,
      method: request?.method,
      message,
    };

    if (!isProd && errors) responseBody.errors = errors;
    if (!isProd && (exception as any)?.stack)
      responseBody.stack = (exception as any).stack;

    httpAdapter.reply(response, responseBody, status);
  }
}
