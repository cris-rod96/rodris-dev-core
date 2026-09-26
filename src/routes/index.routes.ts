import { Router } from "express";
import userRouter from "./user.route.ts";

const rootRouter = Router()
rootRouter.use("/users", userRouter)

export default rootRouter