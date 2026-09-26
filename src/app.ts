import express, { json } from "express";
import cors from "cors";
import rootRouter from "./routes/index.routes.ts"


const server = express();

server.use(json({ limit: "5KB" }));
server.use(cors());



server.use("/api/v1", rootRouter)

export default server;
