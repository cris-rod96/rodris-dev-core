import { registerUser } from "./create.controller"
import { listUsers, listById } from "./list.controller.ts"
import { deleteById } from "./delete.controller.ts"
import { updateById } from "./update.controller.ts"
export default {
  registerUser,
  listUsers,
  listById,
  deleteById,
  updateById
}