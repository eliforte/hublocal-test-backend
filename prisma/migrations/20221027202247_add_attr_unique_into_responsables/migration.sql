/*
  Warnings:

  - A unique constraint covering the columns `[full_name]` on the table `responsables` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone_number]` on the table `responsables` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "responsables_full_name_key" ON "responsables"("full_name");

-- CreateIndex
CREATE UNIQUE INDEX "responsables_phone_number_key" ON "responsables"("phone_number");
