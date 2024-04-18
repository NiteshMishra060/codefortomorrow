"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const admin_module_1 = require("./admin/admin.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                name: "default",
                useFactory: async () => ({
                    type: process.env.DB_TYPE,
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.PGPORT),
                    username: process.env.PGUSER,
                    password: process.env.PGPASSWORD,
                    database: process.env.PGDATABASE,
                    migrations: [__dirname + "/migrations/**/*.{ts,js}"],
                    autoLoadEntities: true,
                    extra: {
                        charset: "utf8mb4_unicode_ci",
                        connectionLimit: 40,
                    },
                    entities: [__dirname + "/**/*.entity.{ts,js}"],
                    synchronize: true,
                    logging: Boolean(parseInt(process.env.DB_LOGGING)),
                }),
            }),
            schedule_1.ScheduleModule.forRoot(),
            admin_module_1.AdminModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map