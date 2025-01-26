import { Router } from "express";
import gatos from "../api/gatos.js";

const router = Router()
const cards = [
    {
        raza: "Scottish Fold",
        imagen: "https://cdn2.thecatapi.com/images/10.jpg"  
    },
    {
        raza: "British Shorthair",
        imagen: "https://cdn2.thecatapi.com/images/11.jpg" 
    },
    {
        raza: "Oriental",
        imagen: "https://cdn2.thecatapi.com/images/12.jpg"  
    }
]
const favoritos =[]

router.get("/", (req, res) => {
    res.render("index", {cards})
})



router.get("/razas", (req, res) => {
    const { size, coat, search } = req.query
    
    let filteredCards = gatos

    if (size) {
        filteredCards = filteredCards.filter(card => 
            card.size.toLowerCase() === coat.toLowerCase()
        )
    }

    if (coat) {
        filteredCards = filteredCards.filter(card => 
            card.coat.toLowerCase() === coat.toLowerCase()
        )
    }

    if (search) {
        filteredCards = filteredCards.filter(card => 
            card.breed.toLowerCase().includes(search.toLowerCase()) ||
            card.characteristics.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
        )
    }

    if (req.xhr) {
        res.render("cardRaza", { cardsRaza: filteredCards })
    } else {
        res.render("razas", { 
            cardsRaza: filteredCards,
            search: search || "",
            size: size || "",
            coat: coat || ""
        })
    }
    
    
})

router.get("/favoritos", (req, res) => {
    res.render("favoritos")
})


export default router