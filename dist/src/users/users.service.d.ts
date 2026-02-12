import { CreateAdultHomeRepresentativeRequestDto, CreateCaregiverDto, CreateUserDto, UserResponseDto } from "src/dtos/users.dtos";
import { RolesService } from "src/roles/roles.service";
import { AdultHomeService } from "src/adult-home/adult-home.service";
import { User } from "./users.entity";
import { Repository } from "typeorm";
import { Caregiver } from "./caregiver.entity";
import { AdultHomeRepresentative } from "./adult-home-representative.entity";
export declare class UsersService {
    private userRepo;
    private caregiverRepo;
    private adultHomeRepRepo;
    private readonly rolesServices;
    private readonly adultHomeService;
    constructor(userRepo: Repository<User>, caregiverRepo: Repository<Caregiver>, adultHomeRepRepo: Repository<AdultHomeRepresentative>, rolesServices: RolesService, adultHomeService: AdultHomeService);
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
    updateCaregiver(caregiver: CreateCaregiverDto): Promise<User>;
    createHomeRep(createHomeRepDto: CreateAdultHomeRepresentativeRequestDto): Promise<UserResponseDto>;
    getAllHomeRep(): Promise<UserResponseDto[]>;
    getHomeRepByUserAndHomeId(userId: string, homeId: string): Promise<UserResponseDto>;
}
