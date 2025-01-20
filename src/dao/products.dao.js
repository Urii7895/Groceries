
import Product from "../models/Product.js";

const productDAO = {};//se crea un objeto vacio 

productDAO.getAll = async () => {//funcion asyncrona para traer todos los datos alamcenados en la base de datos usados
    return await Product.find();  //await es para esperar mientras no se usa y si se usa se ejecuta pero si no espera 
    //puede ejecutarse mientras puede hacer otras cosas
};

export default productDAO;  
