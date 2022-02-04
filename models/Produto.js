const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProdutoSchema = new Schema({
    descricao: { type: String, required: true },
    tipo: { type: String, required: true },
    preco: { type: Number, required: true },
    imagem: {type: String},
    quantidadeDisponivel: { type: Number, required: true }
});

module.exports = mongoose.model('Produto', ProdutoSchema);