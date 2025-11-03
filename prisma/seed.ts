import { PrismaClient } from "../generated/prisma/client";
import { RoleEnum } from "../src/common/enums";
import * as bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.role.upsert({
    where: { name: RoleEnum.ADMIN },
    update: {},
    create: {
      name: RoleEnum.ADMIN,
    },
  });
  console.log("admin created", admin);
  const homeRepRole = await prisma.role.upsert({
    where: { name: RoleEnum.HOMEREPRESENTATIVE },
    update: {},
    create: {
      name: RoleEnum.HOMEREPRESENTATIVE,
    },
  });
  console.log("homeRepRole created", homeRepRole);

  const caregiverRole = await prisma.role.upsert({
    where: { name: RoleEnum.CAREGIVER },
    update: {},
    create: {
      name: RoleEnum.CAREGIVER,
    },
  });
  console.log("caregiverRole created", caregiverRole);
  const password = await bcrypt.hash(process.env.ADMIN_PASSWORD!!, 10);
  //   const adminRole = await prisma.role.up
  const adminUser = await prisma.user.upsert({
    where: { username: "ADMIN" },
    update: {},
    create: {
      username: "ADMIN",
      password: password,
      roles: {
        connect: {
          id: admin.id,
        },
      },
    },
    include: {
      roles: true,
    },
  });
  console.log("adminUser created", adminUser);
}

main()
  .then(() => console.log("🌱 Seed complete"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
