import { AdminService } from './admin.service';
import { loginDto, serviceDto, servicePriceDto, serviceUpdate } from './dto/create-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(login: loginDto): Promise<any>;
    postServiceData(service: serviceDto): Promise<any>;
    postPriceData(priceData: servicePriceDto): Promise<any>;
    getUser(): Promise<any>;
    updateServiceData(serviceupdate: serviceUpdate): Promise<any>;
}
