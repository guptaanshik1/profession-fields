import { Response } from "express";

export const statusHandler = (
  res: Response,
  status: number,
  success: boolean,
  message: string,
  data?: object
) => {
  return res.status(status).json({
    success,
    message,
    data,
  });
};
