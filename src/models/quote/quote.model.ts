import { Sequelize, DataTypes } from "sequelize";

export default (sq: Sequelize) => {
  sq.define(
    "Quotes",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      projectType: {
        type: DataTypes.ENUM("WEB", "MOBILE", "MVP", "TESIS"),
        allowNull: false,
      },
      estimatedBudget: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      resourcesUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM(
          "PENDIENTE",
          "EN REVISIÓN",
          "APROBADO",
          "RECHAZADO",
          "CANCELADO",
          "COMPLETADO",
        ),

        allowNull: false,
      },

      ClientId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      tableName: "Quotes",
      timestamps: true,
    },
  );
};
