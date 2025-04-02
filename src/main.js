import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
});

export default app;
