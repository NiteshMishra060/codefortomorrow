import { NotFoundException, Injectable, Inject, forwardRef } from '@nestjs/common';
import { loginDto, serviceDto, servicePriceDto, serviceUpdate } from './dto/create-admin.dto';
import { Base } from 'src/common/Base';
import { AuthService } from 'src/auth/auth.service';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload.dto';
import { Category } from './entities/catagory.entity';
import { v4 as uuidv4 } from 'uuid';
import { service } from './entities/service.entity';
import { servicePrice } from './entities/serviceprice.entity';

@Injectable()
export class AdminService extends Base {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {
    super();
  }
  public async login(login: loginDto): Promise<any> {
    try {

      if (login.email != "admin@codesfortomorrow.com" || login.password != "Admin123!@#") {
        throw new NotFoundException('either email or password mismatch');
      }

      const jwtToken = await this.authService.jwtLogin(
        Object.assign(new JwtPayloadDto(), {
          email: login.email,
          role: "admin"
        }),
      );
      console.log('getting customer subscriptions');
      const result: any = {
        message: "login success",
        jwttoken: jwtToken

      }
      return result;
    } catch (err) {
      if (err instanceof NotFoundException)
        throw new NotFoundException('password mismatch');
      throw new NotFoundException(err.message);
    }
  }

  public async postServiceData(servicedto: serviceDto): Promise<any> {
    try {
      console.log('getting datasource');
      const manager = await this.getDataSourceManager();
      console.log('cheking data existancy');
      const serviceid: string = uuidv4();
      await manager
        .createQueryBuilder()
        .insert()
        .into(Category)
        .values({
          catagoryId: serviceid,
          CategoryName: servicedto.CategoryName,
        })
        .execute();

      await manager
        .createQueryBuilder()
        .insert()
        .into(service)
        .values({
          ServiceID: serviceid,
          serviceName: servicedto.serviceName,
          priceOptions: servicedto.priceOptions,
          type: servicedto.type

        })
        .execute();
    } catch (err) {
      console.log(err.message);
      throw new NotFoundException("invalid credential")
    }
  }

  // priceData:servicePriceDto
  public async postPriceData(priceData: servicePriceDto): Promise<any> {
    try {
      console.log('getting datasource');
      const manager = await this.getDataSourceManager();
      const serviceid: string = uuidv4();
      const getservicename = await manager
        .createQueryBuilder(service, 'cp')
        .select()
        .where(`cp.serviceName=:serviceName `, {
          serviceName: priceData.serviceName,
        })
        .getOne();

      await manager
        .createQueryBuilder()
        .insert()
        .into(servicePrice)
        .values({
          ServiceID: getservicename.ServiceID,
          Duration: priceData.serviceName,
          Price: priceData.price,
          Type: priceData.type

        })
        .execute();
      return 'data added';

    } catch (err) {
      console.log(err.message);
      throw new NotFoundException("invalid credential")
    }

  }

  public async getAllDetails(): Promise<any> {
    try {
      const manager = await this.getDataSourceManager();
      const serviceData = await manager
        .createQueryBuilder(service, 'cp')
        .select()
        .getMany();

      const servicePriceData = await manager
        .createQueryBuilder(servicePrice, 'cp')
        .select()
        .getMany();

      const categary = await manager
        .createQueryBuilder(Category, 'cp')
        .select()
        .getMany();

      return {
        serviceData: serviceData,
        servicePriceData: servicePriceData,
        categary: categary
      }

    } catch (err) {
      throw new NotFoundException("user Not found")
    }
  }
  public async updateServiceData(serviceupdate: serviceUpdate): Promise<any> {
    try {
      const manager = await this.getDataSourceManager();
      const result = await manager
        .createQueryBuilder()
        .update(service)
        .set({
          serviceName: serviceupdate.serviceName,
          price: serviceupdate.price,
        })
        .where('serviceName = :serviceName', { priceName: serviceupdate.serviceName })
        .execute();

      return {
        message: "updated"
      }

    } catch (err) {
      throw new NotFoundException("user Not found")
    }
  }

}
