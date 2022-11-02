/*
  Warnings:

  - You are about to drop the column `places_id` on the `responsables` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[place_id]` on the table `responsables` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "responsables" DROP CONSTRAINT "responsables_places_id_fkey";

-- DropIndex
DROP INDEX "responsables_places_id_key";

-- AlterTable
ALTER TABLE "responsables" DROP COLUMN "places_id",
ADD COLUMN     "place_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "responsables_place_id_key" ON "responsables"("place_id");

-- AddForeignKey
ALTER TABLE "responsables" ADD CONSTRAINT "responsables_place_id_fkey" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE SET NULL ON UPDATE CASCADE;
