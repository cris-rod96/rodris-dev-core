import { registerUser } from "./create.service.ts";
import { deleteById } from "./delete.service.ts"
import { updateById } from "./update.service.ts"
import {
  listUsers,
  listById
} from "./list.service.ts"
export default {
  registerUser,
  deleteById,
  updateById,
  listUsers,
  listById
};
