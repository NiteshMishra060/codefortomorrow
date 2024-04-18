import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from './dto/jwt-payload.dto';
import { AdminService } from 'src/admin/admin.service';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => AdminService))
    private readonly userService: AdminService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<Boolean> {
    const user:any = username
    if (username!="admin@codesfortomorrow.com") throw new NotFoundException('user not present');

   
    if (user) {
      return user;
    } else {
      throw new UnauthorizedException('Wrong password!');
    }
  }

  async jwtLogin(user: JwtPayloadDto): Promise<string> {
    const payload = {
      // username: user.userName?user.userName:null,
      username: user.email,
      sub: user.email,
      role: user.role ? user.role : 'admin',
      blocked: user?.blocked ? user.blocked : false,
    };
    return await this.jwtService.signAsync(payload);
  }
}
