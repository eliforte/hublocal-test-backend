/*
  Warnings:

  - Added the required column `phone_number` to the `responsables` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "responsables" ADD COLUMN     "phone_number" INTEGER NOT NULL;
