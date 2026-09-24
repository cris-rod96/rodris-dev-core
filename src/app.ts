import express, { json } from "express";
import cors from "cors";

const server = express();

server.use(json({ limit: "5KB" }));
server.use(cors());

export default server;
