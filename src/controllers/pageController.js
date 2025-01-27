import gatos from "../api/gatos.js";

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


export const getIndex = async (req, res) => {
    res.render("index", {cards})
}

export const getRazas = async (req, res) => {
    const { size, coat, search } = req.query

    let gatosFiltrados = gatos

    if (size) {
        gatosFiltrados = gatosFiltrados.filter(card => 
            card.size.toLowerCase() === coat.toLowerCase()
        )
    }

    if (coat) {
        gatosFiltrados = gatosFiltrados.filter(card => 
            card.coat.toLowerCase() === coat.toLowerCase()
        )
    }

    if (search) {
        gatosFiltrados = gatosFiltrados.filter(card => 
            card.breed.toLowerCase().includes(search.toLowerCase()) ||
            card.characteristics.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
        )
    }

    res.render("razas", { 
        cardsRaza: gatosFiltrados,
        search: search || "",
        size: size || "",
        coat: coat || ""
    })
}

export const getFavoritos = async (req, res) => {
    res.render("favoritos")
}