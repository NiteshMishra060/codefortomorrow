import { JwtPayload } from 'jsonwebtoken';
import { UserDto } from '../dto/user-payload.dto';
declare const HeadAdminAuthStrategy_base: new (...args: any[]) => any;
export declare class HeadAdminAuthStrategy extends HeadAdminAuthStrategy_base {
    constructor();
    validate(payload: JwtPayload): Promise<UserDto>;
}
export {};
