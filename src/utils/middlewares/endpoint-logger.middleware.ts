import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class EndpointLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('Endpoint');
  private readonly devMode: boolean;

  constructor(configService: ConfigService) {
    this.devMode = configService.get('NODE_ENV') === 'development';
  }

  use(req: Request, res: Response, next: NextFunction): void {
    if (this.devMode) {
      this.logger.verbose(`${req.method} ${req.originalUrl}`);

      res.on('finish', () => {
        this.logger.verbose(`${req.method} ${req.originalUrl} ${res.statusCode}`);
      });
    }

    next();
  }
}