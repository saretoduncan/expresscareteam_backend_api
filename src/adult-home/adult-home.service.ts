import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {
  AdultHomeResponseDto,
  CreateAdultHomeDto,
} from "src/dtos/adultHome.dtos";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AdultHomeService {
  constructor(private readonly prismaService: PrismaService) {}
  //create home
  async createAdultHome(
    createAdultHomeDto: CreateAdultHomeDto
  ): Promise<AdultHomeResponseDto> {
    try {
      const home = await this.prismaService.adultHome.findUnique({
        where: {
          email: createAdultHomeDto.email,
        },
        include: {
          reps: true,
        },
      });
      if (home) {
        throw new Error("Home already exists");
      }
      const newHome = await this.prismaService.adultHome.create({
        data: {
          email: createAdultHomeDto.email,
          name: createAdultHomeDto.name,
          phone: createAdultHomeDto.phone,
          city: createAdultHomeDto.city,
          state: createAdultHomeDto.state,
          street: createAdultHomeDto.street,
          zipcode: createAdultHomeDto.zipcode,
          website: createAdultHomeDto.website,
        },
        include: {
          reps: true,
        },
      });
      return newHome;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get home by id
  async getAdultHomeById(id: string): Promise<AdultHomeResponseDto> {
    try {
      const home = await this.prismaService.adultHome.findUnique({
        where: {
          id,
        },
        include: {
          reps: true,
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
  async getAllAdultHomes(): Promise<AdultHomeResponseDto[]> {
    try {
      const homes = await this.prismaService.adultHome.findMany({
        include: {
          reps: true,
        },
      });
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
  ): Promise<AdultHomeResponseDto> {
    //try catch
    try {
      const home = await this.getAdultHomeById(id);
      const updatedHome = await this.prismaService.adultHome.update({
        where: {
          id: home.id,
        },
        data: {
          name: createAdultHomeDto.name,
          email: createAdultHomeDto.email,
          phone: createAdultHomeDto.phone,
          city: createAdultHomeDto.city,
          state: createAdultHomeDto.state,
          zipcode: createAdultHomeDto.zipcode,
          street: createAdultHomeDto.street,
          website: createAdultHomeDto.website,
        },
        include: {
          reps: true,
        },
      });
      return updatedHome;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //delete home
}
