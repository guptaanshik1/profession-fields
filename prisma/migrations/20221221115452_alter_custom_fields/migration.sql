-- AlterTable
ALTER TABLE "CustomFormFields" ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "isMandatory" DROP NOT NULL,
ALTER COLUMN "isMandatory" SET DEFAULT false,
ALTER COLUMN "canBeNull" DROP NOT NULL,
ALTER COLUMN "canBeNull" SET DEFAULT false,
ALTER COLUMN "isUnique" DROP NOT NULL,
ALTER COLUMN "isUnique" SET DEFAULT false,
ALTER COLUMN "isUpdatable" DROP NOT NULL,
ALTER COLUMN "isUpdatable" SET DEFAULT true,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "forProfession" DROP NOT NULL;
