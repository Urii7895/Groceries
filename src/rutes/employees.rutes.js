import { Router } from "express";
import employedController  from "../controllers/employees.controller.js";
const router=Router();
router.get('/getAll',employedController.getAll);
router.get('/getOne/:id',employedController.getOne);

export default router;