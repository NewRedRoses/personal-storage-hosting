/*
  Warnings:

  - You are about to drop the column `folder_id` on the `File` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_folder_id_fkey";

-- DropIndex
DROP INDEX "File_folder_id_key";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "folder_id",
ADD COLUMN     "folderId" INTEGER;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
