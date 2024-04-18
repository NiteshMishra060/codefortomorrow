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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const swagger_1 = require("@nestjs/swagger");
const admin_gaurd_1 = require("../auth/Guard/admin.gaurd");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    create(login) {
        return this.adminService.login(login);
    }
    async postServiceData(service) {
        return this.adminService.postServiceData(service);
    }
    async postPriceData(priceData) {
        return this.adminService.postPriceData(priceData);
    }
    async getUser() {
        return this.adminService.getAllDetails();
    }
    async updateServiceData(serviceupdate) {
        return this.adminService.updateServiceData(serviceupdate);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)("/login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.loginDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/post-service-data"),
    (0, common_1.UseGuards)(admin_gaurd_1.HeadAdminGuard),
    (0, swagger_1.ApiResponse)({ type: null }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.serviceDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "postServiceData", null);
__decorate([
    (0, common_1.Post)("/post-pice-data"),
    (0, common_1.UseGuards)(admin_gaurd_1.HeadAdminGuard),
    (0, swagger_1.ApiResponse)({ type: null }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.servicePriceDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "postPriceData", null);
__decorate([
    (0, common_1.Get)('get-all-details'),
    (0, common_1.UseGuards)(admin_gaurd_1.HeadAdminGuard),
    (0, swagger_1.ApiResponse)({ type: null }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getUser", null);
__decorate([
    (0, common_1.Patch)('update-service-data'),
    (0, common_1.UseGuards)(admin_gaurd_1.HeadAdminGuard),
    (0, swagger_1.ApiResponse)({ type: null }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.serviceUpdate]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateServiceData", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map