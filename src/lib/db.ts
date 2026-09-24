import { Sequelize } from "sequelize";
import { DATABASE_CONFIG } from "../config/config.js";
import { models } from "../models/index.models.js";

if (!DATABASE_CONFIG.URI) {
  throw new Error("La variable de entorno para la conexión no esta definida");
}

export const sq = new Sequelize(DATABASE_CONFIG.URI, DATABASE_CONFIG.OPTIONS);

models.forEach((m) => m(sq));

// Asociaciones
const {
  Educations,
  Experiences,
  Projects,
  Quotes,
  Services,
  Skills,
  Transactions,
  Users,
} = sq.models;

Users?.hasMany(Quotes!, {
  foreignKey: "ClientId",
});
Quotes?.belongsTo(Users!, {
  foreignKey: "ClientId",
});

Users?.hasMany(Transactions!, {
  foreignKey: "ClientId",
});
Transactions?.belongsTo(Users!, {
  foreignKey: "ClientId",
});

export {
  Educations,
  Experiences,
  Projects,
  Quotes,
  Services,
  Skills,
  Transactions,
  Users,
};
