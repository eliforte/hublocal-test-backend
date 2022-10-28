/*
  Warnings:

  - Made the column `update_at` on table `tickets` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tickets" ALTER COLUMN "update_at" SET NOT NULL;
