import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error al generar el hash de la contraseña");
  }
};

const comparePassword = async (
  password: string,
  hashed: string,
): Promise<boolean> => {
  try {
    const match = await bcrypt.compare(password, hashed);
    return match;
  } catch (error) {
    throw new Error("Error al verificar la contraseña");
  }
};

export default {
  hashPassword,
  comparePassword,
};
