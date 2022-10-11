const producto = require("../models/productos")


//Ver lista de producto
exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        success:true,
        message: "En esta ruta usted podra ver todos los productos"
    })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product = await producto.create(req.body);

    res.status(200).json({
        success:true,
        product
    })
}