import { AdultHomeResponseDto, CreateAdultHomeDto } from "src/dtos/adultHome.dtos";
import { PrismaService } from "src/prisma/prisma.service";
export declare class AdultHomeService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createAdultHome(createAdultHomeDto: CreateAdultHomeDto): Promise<AdultHomeResponseDto>;
    getAdultHomeById(id: string): Promise<AdultHomeResponseDto>;
    getAllAdultHomes(): Promise<AdultHomeResponseDto[]>;
    updateHome(id: string, createAdultHomeDto: CreateAdultHomeDto): Promise<AdultHomeResponseDto>;
}
