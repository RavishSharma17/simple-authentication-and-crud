const { validationResult } = require('express-validator');
const db = require('../models');

exports.getAllProducts = async (req, res) => {
    const products = await db.Product.findAll();
    res.send(products);
};

exports.createProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const product = await db.Product.create(req.body);
        res.send(product);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.updateProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const product = await db.Product.update(req.body, { where: { id: req.params.id } });
        res.send(product);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await db.Product.destroy({ where: { id: req.params.id } });
        res.send({ message: 'Product deleted' });
    } catch (err) {
        res.status(400).send(err);
    }
};
