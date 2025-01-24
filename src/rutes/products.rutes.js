import { Router } from "express";
import productsController  from "../controllers/products.controller.js";
const router=Router();

router.get('/getAll',productsController.getAll);


router.get('/getOne',productsController.getOne);

router.post('/insert',productsController.insert);




export default router;