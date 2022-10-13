const express = require("express");
const router = express.Router();

const {getProducts, newProduct, getProductById, updateProduct, } = require("../controllers/productsController")

router.route('/productos').get(getProducts)// Listar productos
router.route('/producto/nuevo').post(newProduct); //Crear producto
router.route('/producto/:id').get(getProductById); //Ruta para consultar por ID
router.route('/producto/:id').put(updateProduct); // Ruta para actualizar

module.exports = router;