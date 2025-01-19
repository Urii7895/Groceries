// En src/dao/products.dao.js
import Product from "../models/Product.js";

const productDAO = {};

productDAO.getAll = async () => {
    return await Product.find();  // Devuelve todos los productos
};

export default productDAO;  // Asegúrate de exportar correctamente
