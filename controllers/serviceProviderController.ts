import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import winston from "winston";
import { Profession } from "../types/data";
import { customMessages } from "../utils/customMessages";
import { statusHandler } from "../utils/statusHandler";

const prisma = new PrismaClient();
let globalProfession: Profession;

export const takeProfession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req?.body) statusHandler(res, 400, false, customMessages.BAD_REQUEST);
  const { profession } = req?.body;

  const professions = [
    "DOCTOR",
    "BARBER",
    "LOCAL_MARTS",
    "DENTIST",
    "LAND_LORD",
    "GENERIC",
    "asaadsd",
  ];

  winston.info(`Gettng profession: ${profession}`);
  if (professions && !professions.includes(profession)) {
    winston.warn(`Invalid profession ${profession} in the payload`);
    statusHandler(res, 400, false, customMessages.BAD_REQUEST);
  }
  globalProfession = profession;

  statusHandler(res, 200, true, customMessages.SUCCESS);
};

export const getFieldsForProfession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //   console.log("Global profession: ", globalProfession);
};
