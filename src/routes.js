const express = require("express");
const routes = express.Router();

const cellController = require('./controllers/cellController')

routes.post('/phones', cellController.create);
routes.get('/phones', cellController.index);
routes.get('/phones/:code', cellController.show);
routes.put('/phones/:code', cellController.update);
routes.delete('/phones/:code', cellController.delete);

// routes.post('/phones', (req, res) => {
//     const body = req.body;

//     console.log(body);

//     return res.json({
//         model: 'teste',
//         brand: 'outro teste'
//     });
// }); 

module.exports = routes;