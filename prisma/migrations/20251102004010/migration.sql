/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserRole` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[roleId]` on the table `UserRole` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserRole_userId_key" ON "UserRole"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_roleId_key" ON "UserRole"("roleId");
