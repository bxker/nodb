const parts = [
    {
        part_name: "Case",
        description: "InWin 303 Black ATX Mid Tower Computer Case with Tempered Glass, Black",
        link: "https://www.amazon.com/InWin-303-Black-Computer-Tempered/dp/B01GQNOTEC",
        image: "https://images-na.ssl-images-amazon.com/images/I/617%2B3Z-Vu%2BL._SL1117_.jpg",
        purchased: false

    }
];

const getParts = (req, res) => {
    res.json(parts)
}


module.exports = {
    getParts
}