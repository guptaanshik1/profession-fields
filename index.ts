import express, { Express } from "express";
import dotenv from "dotenv";
import winston from "winston";

import hello from "./routes/hello";
import user from "./routes/user";
import customFields from "./routes/customFields";
import serviceProvider from "./routes/serviceProvider";

const app: Express = express();
dotenv.config();

app.use(express.json());

app.use("/api/v1", hello);
app.use("/api/v1", user);
app.use("/api/v1", customFields);
app.use("/api/v1", serviceProvider);

const port = process.env.PORT;
app.listen(port, () => winston.info(`Server started on port ${port}`));
