import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@Expose()
export class RolesResponseDto {
  @ApiProperty({ description: 'The unique identifier of the role', example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ description: 'The role name, e.g., ADMIN, CAREGIVER, or HOMEREPRESENTATIVE', example: 'ADMIN' })
  name: string;
}
