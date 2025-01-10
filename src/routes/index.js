import { Router } from "express";

const router = Router()
const cards = [
    {
        nombre: "Maine Coon 1",
        imagen: "https://via.placeholder.com/300"
    },
    {
        nombre: "Maine Coon 2",
        imagen: "https://via.placeholder.com/300"
    },
    {
        nombre: "Maine Coon",
        imagen: "https://via.placeholder.com/300"
    },
    {
        nombre: "Maine Coon",
        imagen: "https://via.placeholder.com/300"
    },
    {
        nombre: "Maine Coon",
        imagen: "https://via.placeholder.com/300"
    },
    {
        nombre: "Maine Coon",
        imagen: "https://via.placeholder.com/300"
    },
    {
        nombre: "Maine Coon",
        imagen: "https://via.placeholder.com/300"
    }
]

router.get("/", (req, res) => {
    res.render("index", {cards})
})

router.get("/razas", (req, res) => {
    res.render("razas")
})

router.get("/favoritos", (req, res) => {
    res.render("favoritos")
})


export default router