let purchased = [
    {
        part_name: "Motherboard",
        description: "ASUS ROG Maximus XI Hero (Wi-Fi) Z390 Gaming Motherboard LGA1151 (Intel 8th 9th Gen) ATX DDR4 DP HDMI M.2 USB 3.1 Gen2 802.11AC Wi-Fi",
        link: "https://www.amazon.com/ROG-Maximus-Hero-Wi-Fi-Motherboard/dp/B07HCXT591/ref=sr_1_1?keywords=motherboard+for+9900k&qid=1567094110&s=electronics&sr=1-1",
        image: "https://images-na.ssl-images-amazon.com/images/I/81Du2vIqOmL._SL1500_.jpg",
        display: "purchased"
    }
];

const getPurchased = (req, res) => {
    res.json(purchased)
}

const clearAllPurchases = (req, res) => {
    purchased.splice(+req.params.id, 1)
    res.json(purchased)
}

module.exports = {
    getPurchased,
    purchased,
    clearAllPurchases
}

