const producto = require("../models/productos")

//Ver lista de producto
exports.getProducts=async(req,res,next)=>{
    const productos = await producto.find();
    res.status(200).json({
        success:true,
        cantidad:productos.length,
        productos
    })
}

// Ver productos por ID
exports.getProductById = async(req,res,next)=>{
    const product = await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })
    }
    res.status(200).json({
        success:true,
        message: "Aque esta la info de los productos",
        product
    })
}

// Update a product
exports.updateProduct = async (req,res,next)=>{
    let product = await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })
    }

    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    });
    res.status(200).json({
        success:true,
        message: "Producto actualizado correctamente",
        product
    })
}

//Eliminar un producto


//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product = await producto.create(req.body);

    res.status(200).json({
        success:true,
        product
    })
}