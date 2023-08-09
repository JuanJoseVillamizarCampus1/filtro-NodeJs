import { check } from "express-validator";
import { Router } from "express";
import postLevel from "../controllers/levels.controllers.js";


const router= Router()

router.post('/',postLevel);

export default router