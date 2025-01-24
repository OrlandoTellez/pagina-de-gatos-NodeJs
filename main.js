import express from "express"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import router from "./src/routes/index.js"

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))


app.set("views", join(__dirname, "src/pages"))
app.set("view engine", "ejs")

app.use(express.static(join(__dirname, "./src/public")))

app.use(router)


app.listen(4000, () => {
    console.log("Servidor iniciado en: http://localhost:" + 4000)
})
