import { request, response } from "express";
import productDAO from "../dao/products.dao.js";

const productsController={};//creacion del objeto vacio para agrupar metodos de gestino de sistema lo de un crud 


productsController.getAll = (request, response) => {
    productDAO.getAll()
    .then((products) => {
        response.render('../src/views/index.ejs', { products }); //  Renderiza la vista con los datos
    })
    .catch((error) => {
        response.status(500).json({ message: error }); // Envía JSON solo en caso de error
    });
};

productsController.getOne = (req, res) => {
    const { barcode } = req.params;

    productDAO.getOne(barcode)
        .then((product) => {
            // Si se encuentra el producto, renderiza la vista y pasa los datos
            res.render('../src/views/edit.ejs', { product });
        })
        .catch((error) => {
            // Si hay un error, muestra el mensaje en la respuesta
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
      /*  res.json({
            data:{
                message: "producto agregado con exito",
                product:response

            }
        })*/
       res.redirect('/groceries/products/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    });
}


productsController.updateOne = (req, res) => {
    productDAO.updateOne(req.body, req.params.barcode)
    .then((response) => {
        /*
        res.json({
            data: {
                message: "producto actualizado correctamente con éxito",
                result: response 
            }
        });
        */
        res.redirect('/groceries/products/getAll'); 
    })
    .catch((error) => {
        res.json({
            data: { error: error }
        });
    });
};


productsController.deleteOne = (req, res) => {
    productDAO.deleteOne(req.params.barcode)
        .then((productDeleted) => {
            /* Código comentado */
        });

    // 🚨 Esto se ejecuta inmediatamente, sin esperar el `.then()`
    res.redirect('/groceries/products/getAll')

    .catch((error) => {  // ❌ Este `.catch()` no está en la promesa correcta
        res.json({
            data: {
                error: error
            }
        });
    });
};




export default productsController;//exprotacion por si puede ser usao en otras partes del proyecto 