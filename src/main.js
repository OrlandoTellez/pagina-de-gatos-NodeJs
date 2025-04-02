import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";
import serverless from 'serverless-http';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuraciones existentes
app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(router);

// Middlewares de error (mantener igual)
app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});


export default (req, res) => {
  app(req, res);
};