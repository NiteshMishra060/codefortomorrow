declare const HeadAdminGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class HeadAdminGuard extends HeadAdminGuard_base {
    handleRequest(err: any, user: any, info: any, context: any, status: any): any;
}
export {};
