import express from 'express';  // Asegúrate de importar express
import customersControllers from '../controllers/customers.controllers.js';

const router = express.Router();  // Usa express.Router() en lugar de Route()

router.get('/getAll', customersControllers.getAll);

export default router;
