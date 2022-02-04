const produtoModel = require('../models/Produto');

const getAll = async (req, res) => {
    const produtos = await produtoModel.find();
    res.json(produtos)
}

const getById = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.status(400).json({ erro: "Campos mal preenchidos" });
    }

    const produto = await produtoModel.findById(id).exec()

    if (!produto) {
        req.status(404).json({ erro: "Produto não encontrado" })
    }

    return res.json(produto);
}

const create = async (req, res) => {
    const { descricao, tipo, preco, quantidadeDisponivel, imagem } = req.body;

    if (!descricao || !tipo || !preco || !quantidadeDisponivel) {
        return res.status(400).json({ erro: "Campos mal preenchidos" })
    }

    await new produtoModel({ descricao, tipo, preco, quantidadeDisponivel, imagem }).save();

    return res.status(201).json({ msg: "Produto criado com sucesso!" })
}

const update = async (req, res) => {
    const { descricao, tipo, preco, quantidadeDisponivel, imagem } = req.body;
    const id = req.params.id;

    if (!descricao || !tipo || !preco || !id || !quantidadeDisponivel) {
        return res.status(400).json({ erro: "Campos mal preenchidos" })
    }

    await produtoModel.findByIdAndUpdate(id, { descricao, tipo, preco, quantidadeDisponivel, imagem })
        .exec()
        .then((produto) => res.status(201).json({ msg: "Produto atualizado com sucesso" }))
        .catch((err) => res.status(400).json({ error: "Erro ao atualizar produto" }))
}

const remove = async (req, res) => {
    const id = req.params.id;

    if (!id) res.status(400).json({ erro: "Campos mal preenchidos!" });

    produtoModel.findByIdAndDelete(id)
        .exec()
        .then((produto) => res.status(200).json({ msg: "Produto deletado com sucesso!" }))
        .catch((err) => res.status(400).json({ erro: "Erro ao deletar produto" }))
}

module.exports = { getById, getAll, create, remove, update }