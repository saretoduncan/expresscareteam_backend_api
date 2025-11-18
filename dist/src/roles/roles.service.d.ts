import { RolesResponseDto } from "src/dtos/roles.dtos";
import { Roles } from "./roles.entity";
import { Repository } from "typeorm";
export declare class RolesService {
    private roleRepo;
    constructor(roleRepo: Repository<Roles>);
    onModuleInit(): void;
    createRole(role: string): Promise<RolesResponseDto>;
    getRoleByName(role: string): Promise<Roles>;
    getRoleById(id: string): Promise<Roles>;
    getAllRoles(): Promise<RolesResponseDto[]>;
    updateRole(id: string, role: string): Promise<RolesResponseDto>;
    deleteRole(id: string): Promise<void>;
}
