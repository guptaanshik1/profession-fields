-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Types" AS ENUM ('INTEGER', 'STR', 'LONG', 'BOOL', 'DATE', 'OPTIONS');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "isClient" BOOLEAN DEFAULT false,
    "isServiceProvider" BOOLEAN DEFAULT false,
    "isActive" BOOLEAN DEFAULT true,
    "role" "Role" DEFAULT 'USER',
    "personalAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomFormFields" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "fieldType" "Types" NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "isMandatory" BOOLEAN NOT NULL,
    "canBeNull" BOOLEAN NOT NULL,
    "isUnique" BOOLEAN NOT NULL,
    "isUpdatable" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CustomFormFields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomFormFieldsValue" (
    "id" TEXT NOT NULL,
    "customFormFieldsId" TEXT NOT NULL,
    "jsonData" JSONB,

    CONSTRAINT "CustomFormFieldsValue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "CustomFormFields" ADD CONSTRAINT "CustomFormFields_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomFormFieldsValue" ADD CONSTRAINT "CustomFormFieldsValue_customFormFieldsId_fkey" FOREIGN KEY ("customFormFieldsId") REFERENCES "CustomFormFields"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
