import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { User } from "../types/data";
import winston from "winston";
import { customMessages } from "../utils/customMessages";
import { statusCodes } from "../utils/customStatusCode";
import { statusHandler } from "../utils/statusHandler";
import { excludeFields } from "../utils/excludeFields";
import { prismaErrorHandler } from "../utils/prismaErrorHandler";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const payload = req.body;

  winston.info(`Creating a user with data :: ${JSON.stringify(payload)} `);

  if (
    payload["name"] == "" ||
    payload["email"] == "" ||
    payload["password"] == null ||
    payload["personalAddress"] == "" ||
    payload["city"] == "" ||
    !payload["pincode"]
  ) {
    winston.info("User has sent a bad payload");
    statusHandler(
      res,
      statusCodes.BAD_REQUEST,
      false,
      customMessages.BAD_REQUEST
    );
  }

  let newUser;

  try {
    newUser = await prisma.user.create({
      data: payload,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      prismaErrorHandler(res, error.code);
    }
  }

  if (!newUser) {
    winston.error("Problem in saving the user");
    statusHandler(
      res,
      statusCodes.INTERNAL_SERVER_ERROR,
      false,
      customMessages.INTERNAL_SERVER_ERROR
    );
  }

  winston.info(`User has been saved with data :: ${JSON.stringify(newUser)} `);

  // @ts-ignore
  const userToBeReturned = excludeFields(newUser, ["password"]);

  statusHandler(
    res,
    statusCodes.SUCCESS,
    true,
    customMessages.USER_CREATED,
    userToBeReturned
  );
};
