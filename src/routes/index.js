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

// const consumirApi = async () => {
//     try{
//         const response = await fetch(gatos)
//         const data = await response.json
//         return data
//     }catch(err){
//         console.error(err)
//     }
// }

console.log(gatos)

const cardsRaza = [
    {
        raza: "Siamés",
        tamano: "Mediano",
        pelaje: "Corto",
        tags: ["Inteligente", "Social", "Activo"],
        imagen: "https://cdn2.thecatapi.com/images/1.jpg"  
    },
    {
        raza: "Persa",
        tamano: "Grande",
        pelaje: "Largo",
        tags: ["Tranquilo", "Cariñoso"],
        imagen: "https://cdn2.thecatapi.com/images/2.jpg"  
    },
    {
        raza: "Maine Coon",
        tamano: "Grande",
        pelaje: "Largo",
        tags: ["Juguetón", "Gentil"],
        imagen: "https://cdn2.thecatapi.com/images/3.jpg" 
    },
    {
        raza: "Bengalí",
        tamano: "Mediano",
        pelaje: "Corto",
        tags: ["Activo", "Curioso"],
        imagen: "https://cdn2.thecatapi.com/images/5.jpg"  
    },
    {
        raza: "Ragdoll",
        tamano: "Grande",
        pelaje: "Largo",
        tags: ["Dócil", "Cariñoso"],
        imagen: "https://cdn2.thecatapi.com/images/5.jpg"  
    },
    {
        raza: "Sphynx",
        tamano: "Mediano",
        pelaje: "Corto",
        tags: ["Juguetón", "Inteligente"],
        imagen: "https://cdn2.thecatapi.com/images/9.jpg" 
    },
    {
        raza: "Birmano",
        tamano: "Mediano",
        pelaje: "Semi-largo",
        tags: ["Cariñoso", "Gentil"],
        imagen: "https://cdn2.thecatapi.com/images/7.jpg"  
    },
    {
        raza: "Angora Turco",
        tamano: "Mediano",
        pelaje: "Largo",
        tags: ["Elegante", "Activo", "Leal"],
        imagen: "https://cdn2.thecatapi.com/images/8.jpg"  
    },
    {
        raza: "Abisinio",
        tamano: "Pequeño",
        pelaje: "Corto",
        tags: ["Curioso", "Juguetón", "Energético"],
        imagen: "https://cdn2.thecatapi.com/images/9.jpg" 
    },
    {
        raza: "Scottish Fold",
        tamano: "Mediano",
        pelaje: "Corto o Largo",
        tags: ["Dócil", "Tranquilo", "Adaptable"],
        imagen: "https://cdn2.thecatapi.com/images/10.jpg"  
    },
    {
        raza: "British Shorthair",
        tamano: "Grande",
        pelaje: "Corto",
        tags: ["Calmado", "Cariñoso", "Independiente"],
        imagen: "https://cdn2.thecatapi.com/images/11.jpg" 
    },
    {
        raza: "Oriental",
        tamano: "Mediano",
        pelaje: "Corto",
        tags: ["Extrovertido", "Leal", "Conversador"],
        imagen: "https://cdn2.thecatapi.com/images/12.jpg"  
    }
]

const favoritos =[]

router.get("/", (req, res) => {
    res.render("index", {cards})
})

// {
//     breed: 'Abyssinian',
//     size: '7  -  10',
//     coat: 'Coated',
//     image: '0XYvRd7oD',
//     characteristics: [ 'Active', 'Energetic', 'Independent', 'Intelligent', 'Gentle' ]
//   },

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