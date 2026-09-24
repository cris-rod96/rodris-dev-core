import { Optional } from "sequelize";

type Role = {
  role: "ADMIN" | "CLIENT" | "RECRUITER";
};

interface UserI {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  password?: string | null;
  email: string;
  role: Role;
  country: string;
  province?: string | null;
  city?: string | null;
  address?: string | null;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationI extends Optional<
  UserI,
  | "id"
  | "password"
  | "province"
  | "city"
  | "address"
  | "isActive"
  | "createdAt"
  | "updatedAt"
> {}
