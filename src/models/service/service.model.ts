import { Sequelize, DataTypes } from "sequelize";

export default (sq: Sequelize) => {
  sq.define(
    "Services",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      estimatedPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM(
          "TUTORÍA",
          "DESARROLLO WEB",
          "DESARROLLO MOBILE",
          "CONSULTORÍA",
        ),
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Services",
      timestamps: true,
    },
  );
};
