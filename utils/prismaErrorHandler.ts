import winston from "winston";
import { customMessages } from "./customMessages";
import { statusCodes } from "./customStatusCode";
import { statusHandler } from "./statusHandler";
import { Response } from "express";

export const prismaErrorHandler = (res: Response, errorCode: string) => {
  switch (errorCode) {
    case "P2002": {
      winston.warn(`User entered already registered email`);
      statusHandler(
        res,
        statusCodes.BAD_REQUEST,
        false,
        customMessages.EMAIL_ALREADY_EXIST
      );
    }
    case "P2011": {
      winston.warn(`User is missing required fields`);
      statusHandler(
        res,
        statusCodes.BAD_REQUEST,
        false,
        customMessages.BAD_REQUEST
      );
    }
    default: {
      winston.warn(`Database is getting invalid value for field`);
      statusHandler(
        res,
        statusCodes.BAD_REQUEST,
        false,
        customMessages.BAD_REQUEST
      );
    }
  }
};
