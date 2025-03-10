import { Router } from "express";
import productsController  from "../controllers/products.controller.js";
const router=Router();

router.get('/getAll',productsController.getAll);


router.get('/getOne/:barcode',productsController.getOne);

router.post('/insert',productsController.insert);

router.post('/updateOne/:barcode',productsController.updateOne);

router.get('/deleteOne/:barcode', productsController.deleteOne);







export default router;