import { Users } from "../../lib/db";
import { UserUpdateI } from "../../interfaces/user.interface"




const updateById = async (id: string, data: UserUpdateI) => {
  if (!id) {
    return {
      code: 400,
      message: "El id del usuario es obligatorio"
    }
  }


  const user = await Users.findOne({
    where: {
      id
    }
  })

  if (!user) {
    return {
      code: 404,
      message: "Usuario no encontrado"
    }
  }

  await Users.update(data, {
    where: {
      id
    }
  })
}


export {
  updateById
}