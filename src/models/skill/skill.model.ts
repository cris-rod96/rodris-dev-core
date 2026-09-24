import { Sequelize, DataTypes } from "sequelize";

export default (sq: Sequelize) => {
  sq.define(
    "Skills",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      category: {
        type: DataTypes.ENUM("FRONTEND", "BACKEND", "MOBILE", "DATABASE"),
        allowNull: false,
      },
      level: {
        type: DataTypes.ENUM("AVANZADO", "INTERMEDIO", "EXPERTO"),
        defaultValue: "AVANZADO",
        allowNull: false,
      },

      iconSvg: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isFeatured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "Skills",
      timestamps: true,
    },
  );
};
