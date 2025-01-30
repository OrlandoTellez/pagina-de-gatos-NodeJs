import gatos from "../api/gatos.js"


const gatosConvertidos = gatos.map(gato => {
    const [minSizeInInches, maxSizeInInches] = gato.size.split(' - ').map(Number)
    const minSizeInCm = (minSizeInInches * 2.54).toFixed(2)
    const maxSizeInCm = (maxSizeInInches * 2.54).toFixed(2)
    return {
        ...gato,
        coat: gato.coat === "Coated" ? "con pelaje" : "sin pelaje",
        size: `${minSizeInCm} - ${maxSizeInCm}`
    }
})

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

    let gatosFiltrados = gatosConvertidos

    const sizeRanges = {
        pequeño: [0, 30], 
        mediano: [30, 60], 
        grande: [60, 300] 
    };


    if (size && sizeRanges[size]) {
        const [minRange, maxRange] = sizeRanges[size]
    
        gatosFiltrados = gatosFiltrados.filter(card => {
            const sizeParts = card.size.split(" - ")
            if (sizeParts.length !== 2) {
                console.error("Error en el formato de tamaño:", card.size)
                return false
            }
    
            const [minSize, maxSize] = sizeParts.map(size => Number(size.trim()))
            console.log(`Comparando: min=${minSize}, max=${maxSize} con rango=${minRange}-${maxRange}`)
    
            return minSize >= minRange && maxSize <= maxRange
        })
    
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


let cardFavoritos = []

export const getFavoritos = async (req, res) => {
    res.render("favoritos", {cardFavoritos: cardFavoritos})
}