import { Sequelize, DataTypes } from "sequelize";

export default (sq: Sequelize) => {
  sq.define(
    "Projects",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      iamgeUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },

      techs: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },

      repoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },
      demoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },
      isFeatured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isVisible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Projects",
      timestamps: true,
    },
  );
};
