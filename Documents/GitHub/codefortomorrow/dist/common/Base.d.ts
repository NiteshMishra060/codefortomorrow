import { DataSource, EntityManager } from 'typeorm';
export declare class Base {
    defaultDataSource: DataSource;
    constructor();
    protected getDataSourceManager(): Promise<EntityManager>;
}
