import { Users } from "../../lib/db"


const listUsers = async () => {
  const users = await Users.findAll();

  return {
    code: 200,
    users
  }
}

const listById = async (id: string) => {
  if (!id) {
    return {
      code: 400,
      message: "El id del usuario es obligatorio"
    }
  }

  const user = await Users.findOne({
    where: {
      id
    },
    attributes: {
      exclude: ["password"]
    }
  })

  if (!user) {
    return {
      code: 404,
      message: "Usuario no encontrado"
    }
  }

  return {
    code: 200,
    user
  }

}

export {
  listUsers,
  listById
}
