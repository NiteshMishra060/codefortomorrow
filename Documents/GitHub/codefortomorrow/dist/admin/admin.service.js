"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const Base_1 = require("../common/Base");
const auth_service_1 = require("../auth/auth.service");
const jwt_payload_dto_1 = require("../auth/dto/jwt-payload.dto");
const catagory_entity_1 = require("./entities/catagory.entity");
const uuid_1 = require("uuid");
const service_entity_1 = require("./entities/service.entity");
const serviceprice_entity_1 = require("./entities/serviceprice.entity");
let AdminService = class AdminService extends Base_1.Base {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async login(login) {
        try {
            if (login.email != "admin@codesfortomorrow.com" || login.password != "Admin123!@#") {
                throw new common_1.NotFoundException('either email or password mismatch');
            }
            const jwtToken = await this.authService.jwtLogin(Object.assign(new jwt_payload_dto_1.JwtPayloadDto(), {
                email: login.email,
                role: "admin"
            }));
            console.log('getting customer subscriptions');
            const result = {
                message: "login success",
                jwttoken: jwtToken
            };
            return result;
        }
        catch (err) {
            if (err instanceof common_1.NotFoundException)
                throw new common_1.NotFoundException('password mismatch');
            throw new common_1.NotFoundException(err.message);
        }
    }
    async postServiceData(servicedto) {
        try {
            console.log('getting datasource');
            const manager = await this.getDataSourceManager();
            console.log('cheking data existancy');
            const serviceid = (0, uuid_1.v4)();
            await manager
                .createQueryBuilder()
                .insert()
                .into(catagory_entity_1.Category)
                .values({
                catagoryId: serviceid,
                CategoryName: servicedto.CategoryName,
            })
                .execute();
            await manager
                .createQueryBuilder()
                .insert()
                .into(service_entity_1.service)
                .values({
                ServiceID: serviceid,
                serviceName: servicedto.serviceName,
                priceOptions: servicedto.priceOptions,
                type: servicedto.type
            })
                .execute();
        }
        catch (err) {
            console.log(err.message);
            throw new common_1.NotFoundException("invalid credential");
        }
    }
    async postPriceData(priceData) {
        try {
            console.log('getting datasource');
            const manager = await this.getDataSourceManager();
            const serviceid = (0, uuid_1.v4)();
            const getservicename = await manager
                .createQueryBuilder(service_entity_1.service, 'cp')
                .select()
                .where(`cp.serviceName=:serviceName `, {
                serviceName: priceData.serviceName,
            })
                .getOne();
            await manager
                .createQueryBuilder()
                .insert()
                .into(serviceprice_entity_1.servicePrice)
                .values({
                ServiceID: getservicename.ServiceID,
                Duration: priceData.serviceName,
                Price: priceData.price,
                Type: priceData.type
            })
                .execute();
            return 'data added';
        }
        catch (err) {
            console.log(err.message);
            throw new common_1.NotFoundException("invalid credential");
        }
    }
    async getAllDetails() {
        try {
            const manager = await this.getDataSourceManager();
            const serviceData = await manager
                .createQueryBuilder(service_entity_1.service, 'cp')
                .select()
                .getMany();
            const servicePriceData = await manager
                .createQueryBuilder(serviceprice_entity_1.servicePrice, 'cp')
                .select()
                .getMany();
            const categary = await manager
                .createQueryBuilder(catagory_entity_1.Category, 'cp')
                .select()
                .getMany();
            return {
                serviceData: serviceData,
                servicePriceData: servicePriceData,
                categary: categary
            };
        }
        catch (err) {
            throw new common_1.NotFoundException("user Not found");
        }
    }
    async updateServiceData(serviceupdate) {
        try {
            const manager = await this.getDataSourceManager();
            const result = await manager
                .createQueryBuilder()
                .update(service_entity_1.service)
                .set({
                serviceName: serviceupdate.serviceName,
                price: serviceupdate.price,
            })
                .where('serviceName = :serviceName', { priceName: serviceupdate.serviceName })
                .execute();
            return {
                message: "updated"
            };
        }
        catch (err) {
            throw new common_1.NotFoundException("user Not found");
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AdminService);
//# sourceMappingURL=admin.service.js.map