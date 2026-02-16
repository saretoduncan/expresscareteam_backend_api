import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {

  CreateAdultHomeDto,
} from "src/dtos/adultHome.dtos";

import { AdultHome } from "./adult-home.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdultHomeService {
  constructor(
    @InjectRepository(AdultHome) private adultHomeRepo: Repository<AdultHome>
  ) {}
  //create home
  async createAdultHome(
    createAdultHomeDto: CreateAdultHomeDto
  ): Promise<AdultHome> {
    try {
      const home = await this.adultHomeRepo.findOne({
        where: {
          email: createAdultHomeDto.email,
        },
        relations: {
          representative: true,
        },
      });
      if (home) {
        throw new Error("Home using provided email already exists");
      }
      const newHome =  this.adultHomeRepo.create({
        name: createAdultHomeDto.name,
        city: createAdultHomeDto.city,
        email: createAdultHomeDto.email,
        phone: createAdultHomeDto.phone,
        state: createAdultHomeDto.state,
        street: createAdultHomeDto.street,
        website: createAdultHomeDto.website,
        zipcode: createAdultHomeDto.zipcode,
        homeDescription:createAdultHomeDto.homeDescription
      });
      await this.adultHomeRepo.save(newHome);
      return newHome;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get home by id
  async getAdultHomeById(id: string): Promise<AdultHome> {
    try {
      const home = await this.adultHomeRepo.findOne({
        where: {
          id: id,
        },
        relations: {
          representative: true,
        },
      });
      if (!home) {
        throw new HttpException("Home not found", HttpStatus.NOT_FOUND);
      }
      return home;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get all homes
  async getAllAdultHomes(): Promise<AdultHome[]> {
    try {
      const homes = await this.adultHomeRepo.find();
      if (!homes) {
        throw new HttpException("No homes found", HttpStatus.NOT_FOUND);
      }
      return homes;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //update home
  async updateHome(
    id: string,
    createAdultHomeDto: CreateAdultHomeDto
  ): Promise<AdultHome> {
    //try catch
    try {
      const home = await this.getAdultHomeById(id);
      home.name = createAdultHomeDto.name;
      home.city = createAdultHomeDto.city;
      home.email = createAdultHomeDto.email;
      home.phone = createAdultHomeDto.phone;
      home.state = createAdultHomeDto.state;
      home.street = createAdultHomeDto.street;
      home.website = createAdultHomeDto.website;
      home.zipcode = createAdultHomeDto.zipcode;

      return this.adultHomeRepo.save(home);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //delete home
}
