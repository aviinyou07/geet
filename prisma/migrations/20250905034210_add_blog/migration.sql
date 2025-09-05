/*
  Warnings:

  - Added the required column `updatedAt` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Blog" ADD COLUMN     "attachments" TEXT[],
ADD COLUMN     "category" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "featured" BOOLEAN DEFAULT false,
ADD COLUMN     "keywords" TEXT[],
ADD COLUMN     "metaDescription" TEXT,
ADD COLUMN     "metaTitle" TEXT,
ADD COLUMN     "publishDate" TIMESTAMP(3),
ADD COLUMN     "status" TEXT,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "excerpt" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;
