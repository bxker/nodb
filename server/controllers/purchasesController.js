let purchased = [
    {
        part_name: "CPU",
        description: "Intel Core i9-9900K Desktop Processor 8 Cores up to 5.0 GHz Turbo unlocked LGA1151 300 Series 95W",
        link: "https://www.amazon.com/Intel-i9-9900K-Desktop-Processor-Unlocked/dp/B005404P9I/ref=sr_1_2?crid=YXRYG3FLG9HX&keywords=i7+9900k&qid=1567033437&s=electronics&sprefix=i7%2Celectronics%2C152&sr=1-2",
        image: "https://images-na.ssl-images-amazon.com/images/I/71RsweT83eL._SL1500_.jpg",
        display: "purchased"
    }
];

const getPurchased = (req, res) => {
    res.json(purchased)
}

module.exports = {
    getPurchased
}