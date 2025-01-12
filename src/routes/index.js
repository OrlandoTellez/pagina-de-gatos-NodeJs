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
    }
]

const cardsRaza = [
    {
        raza: "Siamés",
        tamano: "Mediano",
        pelaje: "Corto",
        tags: [
            "Inteligente",
            "Social",
            "Activo"
        ]
    },
    {
        raza: "Persa",
        tamano: "Grande",
        pelaje: "Largo",
        tags: [
            "Tranquilo",
            "Cariñoso"
        ]
    },
    {
        raza: "Maine Coon",
        tamano: "Grande",
        pelaje: "Largo",
        tags: [
            "Juguetón",
            "Gentil"
        ]
    },
    {
        raza: "Bengalí",
        tamano: "Mediano",
        pelaje: "Corto",
        tags: [
            "Activo",
            "Curioso"
        ]
    },
    {
        raza: "Ragdoll",
        tamano: "Grande",
        pelaje: "Largo",
        tags: [
            "Dócil",
            "Cariñoso"
        ]
    },
    {
        raza: "Sphynx",
        tamano: "Mediano",
        pelaje: "Corto",
        tags: [
            "Juguetón",
            "Inteligente"
        ]
    },
    {
        raza: "Birmano",
        tamano: "Mediano",
        pelaje: "Semi-largo",
        tags: [
            "Cariñoso",
            "Gentil"
        ]
    },
    {
        raza: "Angora Turco",
        tamano: "Mediano",
        pelaje: "Largo",
        tags: [
            "Elegante",
            "Activo",
            "Leal"
        ]
    },
    {
        raza: "Abisinio",
        tamano: "Pequeño",
        pelaje: "Corto",
        tags: [
            "Curioso",
            "Juguetón",
            "Energético"
        ]
    },
    {
        raza: "Scottish Fold",
        tamano: "Mediano",
        pelaje: "Corto o Largo",
        tags: [
            "Dócil",
            "Tranquilo",
            "Adaptable"
        ]
    },
    {
        raza: "British Shorthair",
        tamano: "Grande",
        pelaje: "Corto",
        tags: [
            "Calmado",
            "Cariñoso",
            "Independiente"
        ]
    },
    {
        raza: "Oriental",
        tamano: "Mediano",
        pelaje: "Corto",
        tags: [
            "Extrovertido",
            "Leal",
            "Conversador"
        ]
    }
]


router.get("/", (req, res) => {
    res.render("index", {cards})
})

router.get("/razas", (req, res) => {
    res.render("razas", {cardsRaza})
})

router.get("/favoritos", (req, res) => {
    res.render("favoritos")
})


export default router