import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    let status: number = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | string[] = 'Internal server error';

    if (exception instanceof HttpException && exception.getStatus() < 500) {
      status = exception.getStatus();
      message = this.getMessage(exception);
    }

    this.logger.error({
      method: request.method,
      url: request.originalUrl,
      status,
      exception,
      stack: exception instanceof Error ? exception.stack : undefined,
    });

    response.status(status).json({ statusCode: status, message });
  }

  private getMessage(exception: HttpException): string | string[] {
    const res = exception.getResponse();

    if (typeof res === 'string') return res;
    if (typeof res === 'object' && res !== null && 'message' in res) {
      return (res as { message: string | string[] }).message;
    }

    return exception.message;
  }
}