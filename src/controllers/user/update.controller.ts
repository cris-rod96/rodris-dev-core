import type { Request, Response } from "express"
import { userServices } from "../../services/index.services.ts"
import { type UserUpdateI } from "../../interfaces/user.interface.ts"

export const updateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data: UserUpdateI = req.body

    const { code, message } = await userServices.updateById(id as string, data)

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