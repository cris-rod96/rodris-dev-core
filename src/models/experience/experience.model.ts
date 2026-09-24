import { Sequelize, DataTypes } from "sequelize";

export default (sq: Sequelize) => {
  sq.define(
    "Experiences",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      isCurrent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "Experiences",
      timestamps: true,
    },
  );
};
