import "dotenv/config";
import { type Options } from "sequelize";

const {
  PORT = 3000,
  NODE_ENV = "development",
  DATABASE_URI_PROD,
  DATABASE_URI_DEV,
} = process.env;

const isDev = NODE_ENV === "development";

const OPTIONS: Options = isDev
  ? {
      logging: false,
      native: false,
      dialect: "postgres",
    }
  : {
      logging: false,
      native: false,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    };

const DATABASE_CONFIG = {
  URI: isDev ? DATABASE_URI_DEV : DATABASE_URI_PROD,
  OPTIONS,
};

export { PORT, NODE_ENV, DATABASE_CONFIG };
