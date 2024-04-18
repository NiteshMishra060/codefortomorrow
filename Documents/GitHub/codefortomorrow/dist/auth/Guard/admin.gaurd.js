"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadAdminGuard = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const passport_1 = require("@nestjs/passport");
let HeadAdminGuard = class HeadAdminGuard extends (0, passport_1.AuthGuard)('user-auth') {
    handleRequest(err, user, info, context, status) {
        if (info instanceof jsonwebtoken_1.JsonWebTokenError) {
            console.log('error', info);
            throw new common_1.UnauthorizedException('Invalid Token!');
        }
        return super.handleRequest(err, user, info, context, status);
    }
};
exports.HeadAdminGuard = HeadAdminGuard;
exports.HeadAdminGuard = HeadAdminGuard = __decorate([
    (0, common_1.Injectable)()
], HeadAdminGuard);
//# sourceMappingURL=admin.gaurd.js.map