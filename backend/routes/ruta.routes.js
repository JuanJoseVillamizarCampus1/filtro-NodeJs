import { check } from "express-validator";
import { Router } from "express";
import postRuta from "../controllers/ruta.controllers.js";


const router= Router()

router.post('/',postRuta);

export default router