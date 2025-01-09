import express from "express"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))


app.set("views", join(__dirname, "pages"))
app.set("view engine", "ejs")

app.use(express.static(join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index")
}
)


app.listen(3000, () => {
    console.log("Servidor iniciado en: http://localhost:" + 3000)
})
