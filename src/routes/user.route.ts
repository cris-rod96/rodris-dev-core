import { Router } from "express"
import { userControllers } from "../controllers/index.controllers.ts"

const userRouter = Router()


userRouter.get("/listar/todos", userControllers.listUsers)
userRouter.get("/listar/id/:id", userControllers.listById)


userRouter.post("/registrar", userControllers.registerUser)

export default userRouter

