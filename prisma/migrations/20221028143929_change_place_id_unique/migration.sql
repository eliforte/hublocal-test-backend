/*
  Warnings:

  - A unique constraint covering the columns `[place_id]` on the table `tickets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tickets_place_id_key" ON "tickets"("place_id");
