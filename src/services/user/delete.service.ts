import { UserCreationI } from "../../interfaces/user.interface";
import { Users } from "../../lib/db";



const deleteById = async (id: string) => {
  if (!id) return { code: 400, message: "El id del usuario a eliminar es obligatorio" }

  const user = await Users.findOne({
    where: {
      id
    }
  }) as (UserCreationI | null)

  if (!user) {
    return {
      code: 404,
      message: "Usuario no encontrado"
    }
  }

  if (user.isActive) {
    return {
      code: 400,
      message: "El usuario ya se encuentra inactivo."
    }
  }

  await Users.update({
    isActive: false
  }, {
    where: {
      id
    }
  })
  return {
    code: 200,
    message: "Usuario eliminado con éxito"
  }
}


export {
  deleteById
}