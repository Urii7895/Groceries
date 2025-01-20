import { Router } from "express";
import productsController  from "../controllers/products.controller.js";
const router=Router();
router.get('/getAll',productsController.getAll);




// Ruta para obtener todos los productos
//router.get('/getAll', productsController.getAll);

// Ruta para crear un nuevo producto (POST)
//router.post('/create', productsController.create); // Aquí agregas la nueva ruta POST para crear

// Ruta para eliminar un producto por ID (DELETE)
//router.delete('/delete/:id', productsController.delete); // Y aquí la ruta DELETE para eliminar














export default router;