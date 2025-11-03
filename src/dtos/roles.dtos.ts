import { Expose } from "class-transformer";

@Expose()
export class RolesResponseDto {
  id: string;
  name: string;
}
