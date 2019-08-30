let purchasesController = require('./purchasesController')

let parts = [
    {  
        part_name: "Case",
        description: "InWin 303 Black ATX Mid Tower Computer Case with Tempered Glass, Black",
        link: "https://www.amazon.com/InWin-303-Black-Computer-Tempered/dp/B01GQNOTEC",
        image: "https://images-na.ssl-images-amazon.com/images/I/617%2B3Z-Vu%2BL._SL1117_.jpg",
        display: "parts"

    },
    {
        part_name: "CPU",
        description: "Intel Core i9-9900K Desktop Processor 8 Cores up to 5.0 GHz Turbo unlocked LGA1151 300 Series 95W",
        link: "https://www.amazon.com/Intel-i9-9900K-Desktop-Processor-Unlocked/dp/B005404P9I/ref=sr_1_2?crid=YXRYG3FLG9HX&keywords=i7+9900k&qid=1567033437&s=electronics&sprefix=i7%2Celectronics%2C152&sr=1-2",
        image: "https://images-na.ssl-images-amazon.com/images/I/71RsweT83eL._SL1500_.jpg",
        display: "parts"

    }
];


const getParts = (req, res) => {
    res.json(parts)
}

const addPart = (req, res) => {
    parts.push(req.body)
    // purchasesController.purchased.push(req.body)
    res.json(parts)
}

// const updatePart = (req, res) => {

// }

const deletePart = (req, res) => {
    parts.splice(+req.params.id, 1)
    res.json(parts)
}

const movePart = (req, res) => {
    // console.log('hit')
    let item = parts.splice(+req.params.id, 1)
    // console.log(item)
    purchasesController.purchased.push(item[0])
    // console.log(parts)
    // console.log(purchasesController.purchased)
    res.json(parts)
}

module.exports = {
    getParts,
    addPart,
    deletePart,
    movePart
}