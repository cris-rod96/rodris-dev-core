import type { Request, Response } from "express"
import { userServices } from "../../services/index.services.ts"


export const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({
        message: "El id del usuario es obligatorio"
      })
    }
    const { code, message } = await userServices.deleteById(id as string)
    res.status(code).json({ message })
  } catch (err) {
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

