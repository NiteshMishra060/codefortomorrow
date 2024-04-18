import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntityManager } from 'typeorm';
@Injectable()
export class Base {
  @Inject()
  @InjectDataSource('default')
  defaultDataSource: DataSource;
  constructor() {}
  protected async getDataSourceManager(): Promise<EntityManager> {
    console.log(this.defaultDataSource.options['username']);
    return this.defaultDataSource.manager;
  }
}

