-- CreateEnum
CREATE TYPE "Profession" AS ENUM ('DOCTOR', 'BARBER', 'LOCAL_MARTS', 'DENTIST', 'LAND_LORD', 'GENERIC');

-- AlterTable
ALTER TABLE "CustomFormFields" ADD COLUMN     "forProfession" "Profession" NOT NULL DEFAULT 'GENERIC';
