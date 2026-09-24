import { Sequelize, DataTypes } from "sequelize";

export default (sq: Sequelize) => {
  sq.define(
    "Transactions",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      ammount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      ammountMethod: {
        type: DataTypes.ENUM("TARJETA", "TRANSFERENCIA"),
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM("PENDIENTE", "APROBADO", "RECHAZADO"),
        defaultValue: "PENDIENTE",
      },

      voucherUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gatewayId: {
        type: DataTypes.STRING,
        allowNull: true,
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
      tableName: "Transactions",
      timestamps: true,
    },
  );
};
