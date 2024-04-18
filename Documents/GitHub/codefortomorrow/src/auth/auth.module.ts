import { forwardRef, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AdminModule } from "src/admin/admin.module";
import { HeadAdminAuthStrategy } from "./strategy/admin.strategy";

@Module({
  imports: [
    forwardRef(() => AdminModule),
     PassportModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: "31d" },
      }),
    }),
    
  ],
  providers: [AuthService,HeadAdminAuthStrategy],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}
