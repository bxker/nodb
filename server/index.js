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
//update
// app.put('/api/parts/:id', partsController.updatePart)
//delete
app.delete('/api/parts/:id', partsController.deletePart)


//purchases endpoint
app.get('/api/purchased', purchasesController.getPurchased)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

