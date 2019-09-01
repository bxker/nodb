const express = require('express');
const app = express();

const partsController = require('./controllers/partsController.js');
const purchasesController = require('./controllers/purchasesController.js')
const PORT = 5050;

app.use(express.json());

//parts endpoints
//gets all parts
app.get('/api/parts', partsController.getParts)
//add part
app.post('/api/parts', partsController.addPart)
// send to purchased page
app.put('/api/parts/:id', partsController.movePart)
//deletes on parts page
app.delete('/api/parts/:id', partsController.deletePart)


//purchases endpoint
app.get('/api/purchased', purchasesController.getPurchased)
//deletes on purchased page
app.delete('/api/purchased/:id', purchasesController.clearAllPurchases)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

