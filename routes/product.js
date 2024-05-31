const express = require('express');
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const productController = require('../controller/productController');
const router = express.Router();

router.get('/', auth, productController.getAllProducts);

router.post('/', [
    auth,
    body('name').isString().notEmpty(),
    body('description').isString().optional(),
    body('price').isFloat({ gt: 0 })
], productController.createProduct);

router.put('/:id', [
    auth,
    body('name').isString().notEmpty(),
    body('description').isString().optional(),
    body('price').isFloat({ gt: 0 })
], productController.updateProduct);

router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
