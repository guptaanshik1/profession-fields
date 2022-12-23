import { PrismaClient, Prisma } from "@prisma/client";
import { statusCodes } from "./../utils/customStatusCode";
import { Request, Response } from "express";
import { statusHandler } from "../utils/statusHandler";
import { customMessages } from "../utils/customMessages";
import winston from "winston";
import { prismaErrorHandler } from "../utils/prismaErrorHandler";

const prisma = new PrismaClient();

export const addCustomFieldForProfession = async (
  req: Request,
  res: Response
) => {
  const payload = req.body;

  if (!payload) {
    winston.info("Got bad payload from Client");
    statusHandler(
      res,
      statusCodes.BAD_REQUEST,
      false,
      customMessages.BAD_REQUEST
    );
  }

  winston.info(`Received payload from client :: ${JSON.stringify(payload)}`);

  let customFormField;
  const customFormFieldArray = [];

  try {
    for (let i = 0; i < payload.length; i++) {
      console.log("saving....");
      const data = {
        ...payload[i],
        userId: "e012efc5-c673-4da8-832a-721eb7941454",
      };
      console.log("Data being saved to db: ", data);
      customFormField = await prisma.customFormFields.create({
        data,
      });
      console.log("saved");
      customFormFieldArray.push(customFormField);
    }
  } catch (error) {
    if (error instanceof Prisma.PrismaClientValidationError) {
      console.log("Error while saving the fields: ", error);
    }
  }

  statusHandler(
    res,
    statusCodes.SUCCESS,
    true,
    "Fields addded successfully",
    customFormFieldArray
  );
};
