/*
  Warnings:

  - You are about to drop the column `updated_infos` on the `tickets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "updated_infos",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "address_number" INTEGER,
ADD COLUMN     "cep" TEXT,
ADD COLUMN     "complement" TEXT,
ADD COLUMN     "name" TEXT;
