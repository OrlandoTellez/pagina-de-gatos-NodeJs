import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/razas", (req, res) => {
    res.render("razas")
})

router.get("/favoritos", (req, res) => {
    res.render("favoritos")
})


export default router