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
export default productsController;//exprotacion por si puede ser usao en otras partes del proyecto 