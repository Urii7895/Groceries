import productDAO from "../dao/products.dao.js";

const productsController={};//creacion del objeto vacio para agrupar metodos de gestino de sistema lo de un crud 

productsController.getAll=(req,res)=>{// definicion de que metodo 
    //recibe(req) envia(res)
    productDAO.getAll()
    
    .then((products)=>{// condicion de caso de uso de que si sireve la funcion o no funciona 
        res.json(products)
    })
    .catch((error)=>{
     res.json({
        data:{
            "message" : error//fucion de que no funona en caso de erro 
        }
     })
    })
};

productsController.getOne = (req, res) => {
    // Obtiene el código de barras desde los parámetros de la solicitud
    const { barcode } = req.params;

    productDAO.getOne(barcode)
        .then((product) => {
            // Devuelve el producto obtenido en formato JSON
            res.json(product);
        })
        .catch((error) => {
            // Manejo de errores en caso de fallo al obtener el producto
            res.json({
                data: {
                    message: error // Devuelve el mensaje del error
                }
            });
        });
};



productsController.insert=(req,res)=>{
    productDAO.insert(req.body)
    .then((response)=>{
        res.json({
            data:{
                message: "producto agregado con exito",
                product:response

            }
        })
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    });
}

export default productsController;//exprotacion por si puede ser usao en otras partes del proyecto 