import { CreateAdultHomeDto } from "src/dtos/adultHome.dtos";
import { AdultHome } from "./adult-home.entity";
import { Repository } from "typeorm";
export declare class AdultHomeService {
    private adultHomeRepo;
    constructor(adultHomeRepo: Repository<AdultHome>);
    createAdultHome(createAdultHomeDto: CreateAdultHomeDto): Promise<AdultHome>;
    getAdultHomeById(id: string): Promise<AdultHome>;
    getAllAdultHomes(): Promise<AdultHome[]>;
    updateHome(id: string, createAdultHomeDto: CreateAdultHomeDto): Promise<AdultHome>;
}
