/*
  Warnings:

  - A unique constraint covering the columns `[company_id]` on the table `responsables` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[places_id]` on the table `responsables` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "responsables" DROP CONSTRAINT "responsables_company_id_fkey";

-- DropForeignKey
ALTER TABLE "responsables" DROP CONSTRAINT "responsables_places_id_fkey";

-- AlterTable
ALTER TABLE "responsables" ALTER COLUMN "company_id" DROP NOT NULL,
ALTER COLUMN "places_id" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "responsables_company_id_key" ON "responsables"("company_id");

-- CreateIndex
CREATE UNIQUE INDEX "responsables_places_id_key" ON "responsables"("places_id");

-- AddForeignKey
ALTER TABLE "responsables" ADD CONSTRAINT "responsables_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responsables" ADD CONSTRAINT "responsables_places_id_fkey" FOREIGN KEY ("places_id") REFERENCES "places"("id") ON DELETE SET NULL ON UPDATE CASCADE;
