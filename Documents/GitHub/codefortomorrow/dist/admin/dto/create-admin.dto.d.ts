export declare class serviceDto {
    CategoryName?: string;
    serviceName: string;
    type: string;
    priceOptions: string;
}
export declare class loginDto {
    email: string;
    password: string;
}
export declare class servicePriceDto {
    serviceName: string;
    Duration: string;
    price: number;
    type: string;
}
export declare class serviceUpdate {
    serviceName?: string;
    Duration?: string;
    price?: number;
    type?: string;
}
