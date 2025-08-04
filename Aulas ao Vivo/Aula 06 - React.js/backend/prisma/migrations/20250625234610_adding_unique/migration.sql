/*
  Warnings:

  - A unique constraint covering the columns `[user_id,tech_id]` on the table `user_tech` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_tech_user_id_tech_id_key" ON "user_tech"("user_id", "tech_id");
