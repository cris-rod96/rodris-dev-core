import { Services } from "../../lib/db.ts";
import {
  ServiceCreateI
} from "../../interfaces/service.interface.ts"

export const createService = async (data: ServiceCreateI) => {
  const service = await Services.findOne({
    where: {
      title: data.title
    }
  })

  if (service) {
    return {
      code: 400,
      message: "Ya existe un servicio con el nombre proporcionado"
    }
  }

  await Services.create(data)
  return {
    code: 201,
    message: "Servicio registrado exitosamente"
  }
}

