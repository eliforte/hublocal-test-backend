/*
  Warnings:

  - Changed the type of `is_admin` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "is_admin",
ADD COLUMN     "is_admin" BOOLEAN NOT NULL;
