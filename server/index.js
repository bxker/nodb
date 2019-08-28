const express = require('express');
const app = express();

const partsController = require('./controllers/partsController.js');
const PORT = 5050;

app.use(express.json());

//parts endpoints
//gets all parts
app.get('/api/parts', partsController.getParts)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));