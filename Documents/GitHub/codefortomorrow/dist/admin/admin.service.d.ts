import { loginDto, serviceDto, servicePriceDto, serviceUpdate } from './dto/create-admin.dto';
import { Base } from 'src/common/Base';
import { AuthService } from 'src/auth/auth.service';
export declare class AdminService extends Base {
    private readonly authService;
    constructor(authService: AuthService);
    login(login: loginDto): Promise<any>;
    postServiceData(servicedto: serviceDto): Promise<any>;
    postPriceData(priceData: servicePriceDto): Promise<any>;
    getAllDetails(): Promise<any>;
    updateServiceData(serviceupdate: serviceUpdate): Promise<any>;
}
