import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { loginDto, serviceDto, servicePriceDto, serviceUpdate } from './dto/create-admin.dto';
import { ApiResponse } from '@nestjs/swagger';
import { HeadAdminGuard } from 'src/auth/Guard/admin.gaurd';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post("/login")
  create(@Body() login: loginDto) {
    return this.adminService.login(login);
  }
  
  @Post("/post-service-data")
  @UseGuards(HeadAdminGuard)
  @ApiResponse({ type: null })
  public async postServiceData(@Body() service:serviceDto) {
    return this.adminService.postServiceData(service);
  }
    
  @Post("/post-pice-data")
  @UseGuards(HeadAdminGuard)
  @ApiResponse({ type: null })
  public async postPriceData(@Body() priceData:servicePriceDto) {
    return this.adminService.postPriceData(priceData);
  }


  @Get('get-all-details')
  @UseGuards(HeadAdminGuard)
  @ApiResponse({ type: null })
  public async getUser() {
    return this.adminService.getAllDetails();
  }

  @Patch('update-service-data')
  @UseGuards(HeadAdminGuard)
  @ApiResponse({ type: null })
  public async updateServiceData(@Body() serviceupdate:serviceUpdate) {
    return this.adminService.updateServiceData(serviceupdate);
  }

  // @Delete('delete-service-data')
  // @UseGuards(HeadAdminGuard)
  // @ApiResponse({ type: null })
  // public async deleteServiceData(@Query("serviceName") serviceName:string) {
  //   return this.adminService.deleteServiceData(serviceName);
  // }
}
