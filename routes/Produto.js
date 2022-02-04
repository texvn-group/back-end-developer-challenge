const router = require('express').Router();
const produtoController = require('../controller/ProdutoController');

router.get('/', produtoController.getAll)

router.get('/:id', produtoController.getById)

router.post('/', produtoController.create)

router.put('/:id', produtoController.update)

router.delete('/:id', produtoController.remove)

module.exports = router;