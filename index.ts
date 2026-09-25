import server from "./src/app";
import { PORT } from "./src/config/config";
import { sq } from "./src/lib/db";
server.listen(PORT, () => {
  console.info(`Servidor escuchando por el puerto ${PORT}`);
  sq.sync({
    logging: false,
    force: false,
    alter: false,
  })
    .then(() => {
      console.log("Base de datos sincronizada con éxito");
    })
    .catch((err) => {
      console.log(`Error en la conexión: ${err.message}`);
    });
});
