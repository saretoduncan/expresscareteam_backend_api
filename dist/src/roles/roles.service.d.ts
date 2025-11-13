import { RolesResponseDto } from "src/dtos/roles.dtos";
import { PrismaService } from "src/prisma/prisma.service";
export declare class RolesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createRole(role: string): Promise<RolesResponseDto>;
    getRoleByName(role: string): Promise<RolesResponseDto>;
    getRoleById(id: string): Promise<RolesResponseDto>;
    getAllRoles(): Promise<RolesResponseDto[]>;
    updateRole(id: string, role: string): Promise<RolesResponseDto>;
    deleteRole(id: string): Promise<void>;
}
