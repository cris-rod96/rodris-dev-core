import { type Optional } from "sequelize";


type CATEGORIES = {
  category: "TUTORÍA" | "DESARROLLO WEB" | "DESARROLLO MOBILE" | "CONSULTORÍA"
}


interface ServiceI {
  id: string
  title: string
  description: string
  category: CATEGORIES
  isActive?: boolean
  createdAt?: Date
  updatedAt?: Date
}


export interface ServiceCreateI extends Optional<
  ServiceI, | "id" | "isActive" | "createdAt" | "updatedAt"
> {}


export interface ServiceUpdateI extends Partial<Omit<ServiceI, "id" | "createdAt" | "updatedAt">> {}