import type { Request, Response } from "express"
import { userServices } from "../../services/index.services.ts"
import { Users } from "../../lib/db.ts"


const listById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({
        message: "El id del usuario es obligatorio"
      })
    }

    const {
      code, message, user
    } = await userServices.listById(id as string)

    res.status(code).json(message ? { message } : { user })
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


const listUsers = async (req: Request, res: Response) => {
  try {

    const { code, users } = await userServices.listUsers()
    res.status(code).json({
      users
    })
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
  listById,
  listUsers
}