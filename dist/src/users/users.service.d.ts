import { CreateAdultHomeRepresentativeRequestDto, CreateCaregiverDto, CreateUserDto, UserResponseDto } from "src/dtos/users.dtos";
import { PrismaService } from "src/prisma/prisma.service";
import { RolesService } from "src/roles/roles.service";
import { AdultHomeService } from "src/adult-home/adult-home.service";
export declare class UsersService {
    private readonly prismaService;
    private readonly rolesServices;
    private readonly adultHomeService;
    constructor(prismaService: PrismaService, rolesServices: RolesService, adultHomeService: AdultHomeService);
    createUser(user: CreateUserDto): Promise<UserResponseDto>;
    getUserById(id: string): Promise<UserResponseDto>;
    getUserByUsername(username: string): Promise<UserResponseDto>;
    getAllUsers(): Promise<UserResponseDto[]>;
    updatePassword(id: string, password: string): Promise<void>;
    addRole(userId: string, roleId: string): Promise<UserResponseDto>;
    revokeRole: (userId: string, roleId: string) => Promise<UserResponseDto>;
    deleteUser(id: string): Promise<void>;
    addCaregiver(caregiver: CreateCaregiverDto): Promise<UserResponseDto>;
    getAllCaregivers(): Promise<UserResponseDto[]>;
    updateCaregiver(caregiver: CreateCaregiverDto): Promise<void>;
    createHomeRep(createHomeRepDto: CreateAdultHomeRepresentativeRequestDto): Promise<UserResponseDto>;
    getAllHomeRep(): Promise<UserResponseDto[]>;
}
