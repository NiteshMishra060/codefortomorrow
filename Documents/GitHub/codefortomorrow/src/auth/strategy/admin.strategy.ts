import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from 'jsonwebtoken';
import { UserDto } from '../dto/user-payload.dto';

@Injectable()
export class HeadAdminAuthStrategy extends PassportStrategy(
  Strategy,
  'user-auth',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // jwtFromRequest: ExtractJwt.fromExtractors([    // For Cookies
      //   (request: Request) => {
      //     let data = request?.cookies["access_token"];
      //     if (!data) {
      //       return null;
      //     }
      //     return data;
      //   },
      // ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<UserDto> {
    if (payload.sub === null || payload.sub === undefined || !payload.sub) {
      throw new UnauthorizedException();
    }
    if (payload.role !== 'admin') {
      throw new UnauthorizedException(
        `Your given role doesn't allow you to access this resource`,
      );
    }
    return {
      email: payload.email,
      role: payload.role,
    };
  }
}
