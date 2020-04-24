const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require('body-parser');
const port = 3331;

const app = express();

app.use(cors());
// app.use(cors({
//     origin: 'http://herocu.com'
// }));//no caso de por nosso projeto em produção

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes);


app.listen(port, () => {
    console.log(`rodando na porta: ${port}`)
});