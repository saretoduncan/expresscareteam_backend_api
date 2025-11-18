"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../common/enums");
const roles_entity_1 = require("../../roles/roles.entity");
const bcrypt = require("bcrypt");
const users_entity_1 = require("../../users/users.entity");
class Admin_Role_Seeder {
    async run(dataSource) {
        const rolesRepo = dataSource.getRepository(roles_entity_1.Roles);
        const userRepo = dataSource.getRepository(users_entity_1.User);
        const roles = [
            { name: enums_1.RoleEnum.ADMIN },
            { name: enums_1.RoleEnum.CAREGIVER },
            { name: enums_1.RoleEnum.HOMEREPRESENTATIVE },
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
        const admin = await userRepo.findOne({
            where: { username: "ADMIN" },
            relations: ["roles"],
        });
        if (!admin) {
            const adminRole = await rolesRepo.findOne({
                where: { name: enums_1.RoleEnum.ADMIN },
            });
            if (!adminRole) {
                throw new Error("Admin role not found");
            }
            const hashedPassword = await bcrypt.hash("Admin123", 10);
            const newAdmin = userRepo.create({
                username: "admin",
                password: hashedPassword,
            });
            newAdmin.roles.push(adminRole);
            await userRepo.save(newAdmin);
            console.log("Admin user created");
        }
        return;
    }
}
exports.default = Admin_Role_Seeder;
//# sourceMappingURL=seeder.js.map