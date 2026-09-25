import { Request, Response } from "express"
import { userServices } from "../../services/index.services"

const registerUser = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const { code, message } = await userServices.registerUser(data)
    res.status(code).json({ message })
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({
        message: err.message
      })
    } else {
      res.status(500).json({
        message: "Un error desconocido ha ocurrido. Intente nuevamente o consulte con un administrador."
      })
    }
  }
}
export {
  registerUser
}