import { SetMetadata } from "@nestjs/common";
import { RoleEnum } from "src/common/enums";

export const HasRoles=(...roles:RoleEnum[])=>SetMetadata("roles",roles)