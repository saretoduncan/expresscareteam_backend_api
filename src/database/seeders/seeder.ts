import { RoleEnum } from "src/common/enums";
import { Roles } from "src/roles/roles.entity";
import { DataSource } from "typeorm";
import * as bcrypt from "bcrypt";
import { User } from "src/users/users.entity";
export default class Admin_Role_Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const rolesRepo = dataSource.getRepository(Roles);
    const userRepo = dataSource.getRepository(User);
    const roles = [
      { name: RoleEnum.ADMIN },
      { name: RoleEnum.CAREGIVER },
      { name: RoleEnum.HOMEREPRESENTATIVE },
    ];
    for (const role of roles) {
      const exists = await rolesRepo.findOne({
        where: {
          name: role.name,
        },
      });
      if (!exists) {
        await rolesRepo.save(role);
      }
    }
    // Seed admin user if not present
    const admin = await userRepo.findOne({
      where: { username: "ADMIN" },
      relations: {
        roles: true,
      },
    });
    if (admin) {
      console.log("Admin user already exists");
      return;
    }

    const adminRole = await rolesRepo.findOne({
      where: { name: RoleEnum.ADMIN },
    });
    if (!adminRole) {
      throw new Error("Admin role not found");
    }
    const hashedPassword = await bcrypt.hash("Admin123", 10);

    const newAdmin = userRepo.create({
      username: "ADMIN",
      password: hashedPassword,
      roles: [adminRole],
    });

    await userRepo.save(newAdmin);
    console.log("Admin user created");

    return;
  }
}
