import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from './dto/jwt-payload.dto';
import { AdminService } from 'src/admin/admin.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: AdminService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<Boolean>;
    jwtLogin(user: JwtPayloadDto): Promise<string>;
}
