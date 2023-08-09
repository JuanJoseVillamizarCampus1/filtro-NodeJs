import { check } from "express-validator";
import postCentro from "../controllers/centros.controllers.js"
import { Router } from "express";


const router= Router()

router.post('/',[],postCentro);

export default router