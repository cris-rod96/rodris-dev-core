import { Sequelize, DataTypes } from "sequelize";

export default (sq: Sequelize) => {
  sq.define(
    "Educations",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      institution: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      degree: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      type: {
        type: DataTypes.ENUM(
          "TERCER NIVEL",
          "SECUNDARIO",
          "ACADEMIA",
          "CERTIFICACIÓN",
        ),
        allowNull: false,
      },
      dateObtained: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      credentialUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      credentialId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "Educations",
      timestamps: true,
    },
  );
};
