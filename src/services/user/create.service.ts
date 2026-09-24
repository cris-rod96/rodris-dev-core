import { Users } from "../../lib/db";
import { bcryptUtils } from "../../utils/index.utils";
import { UserCreationI } from "../../models/interfaces/user.interface";

export const registerUser = async (data: UserCreationI) => {
  const existingUser = await Users.findOne({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    return {
      code: 400,
      message: "El correo electrónico ya se encuentra registrado",
    };
  }

  const existingPhone = await Users.findOne({
    where: {
      phone: data.phone,
    },
  });

  if (existingPhone) {
    return {
      code: 400,
      message: "El número de teléfono ya está en uso",
    };
  }

  let hashedPassword = data.password;
  if (data.password) {
    hashedPassword = await bcryptUtils.hashPassword(data.password);
  }

  await Users.create({
    ...data,
    password: hashedPassword,
  });

  return {
    code: 201,
    message: "Usuario registrado con éxito",
  };
};
