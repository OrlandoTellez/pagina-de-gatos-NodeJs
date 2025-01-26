import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import router from "./src/routes/index.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "src/pages"));
app.set("view engine", "ejs");

app.use(express.static(join(__dirname, "./src/public")));

app.use(router);

app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
console.log(`Servidor iniciado en: http://localhost:${PORT}`);
});
