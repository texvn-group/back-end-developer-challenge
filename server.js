const express = require('express');
const db = require('./database/config');
const mongoose = require('mongoose')
const produtoRouter = require('./routes/Produto');
const app = express();
var cors = require('cors');
const port = 3000;

app.use(cors())
app.use(express.json());


mongoose.connect(db.uri ,
  {
    useNewUrlParser: true
  }
).then(() => "Conectado ao banco com sucesso")
.catch(err => console.log(err)) ;

app.use('/produtos', produtoRouter)

app.listen(port, () => {
    console.log('Server rodando na porta: ' + port);
})