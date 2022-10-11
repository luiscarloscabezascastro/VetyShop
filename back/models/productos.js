const mongoose = require("mongoose")

const productosSchema = mongoose.Schema({
    nombre: {
        type:String,
        required:[true, "Por favor ingresa un nombre al producto"],
        trim: true,
        maxLength:[120,"El mombre del producto debe contener un maximo de 120 caracteres."]
    },
    precio: {
        type:Number,
        required:[true, "Por favor ingresa un precio al producto"],
        maxLength:[10,"El mombre del producto debe contener un maximo de 10 caracteres."],
        default: 0.0
    },
    descripcion: {
        type:String,
        required:[true, "Por favor ingresa una Descripcion"],
        trim: true,
        maxLength:[256,"El mombre del producto debe contener un maximo de 120 caracteres."]
    },
    calificacion: {
        type:Number,
        default: 0,
    },
    imagen: [
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true, "Por favor seleccione una categoria"],
        enum:{
            values:[
                "Categoria 1",
                "Categoria 2",
                "Categoria 3",
                "Categoria 4",
                "Categoria 5"
            ]
        }

    },
    vendedor:{
        type:String,
        required:[true, "Por favor registre el Nombre del vendedor"],
        trim: true,
    },
    inventario:{
        type:Number,
        required:[true, "Por favor registre el Stock inicial del producto"],
        maxLength:[5,"Cantidad maxima de producto no puede pasar la cantidad de 99999."]
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCLiente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        },
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("productos", productosSchema)