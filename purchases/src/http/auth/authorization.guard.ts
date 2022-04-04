import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import jwt from "express-jwt";
import { expressJwtSecret } from "jwks-rsa"
import { promisify } from "node:util"

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private AUTHO_AUDIENCE: string;
  private AUTHO_DOMAIN: string;

  constructor(
    private configService: ConfigService,
  ) {
    this.AUTHO_AUDIENCE = this.configService.get('AUTHO_AUDIENCE') ?? '';
    this.AUTHO_DOMAIN = this.configService.get('AUTHO_DOMAIN') ?? '';
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const httpContext = context.switchToHttp();

    const req = httpContext.getRequest();
    const res = httpContext.getResponse();

    const checkJWT = promisify(
      jwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${this.AUTHO_DOMAIN}.well-known/jwks.json`
        }),
        audience: this.AUTHO_AUDIENCE,
        issuer: this.AUTHO_DOMAIN,
        algorithms: ['RS256'],
      })
    )

    try {
      await checkJWT(req, res);

      return true;
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
