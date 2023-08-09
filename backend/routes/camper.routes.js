import { check } from "express-validator";
import { Router } from "express";
import postCamper from "../controllers/campers.controller.js";


const router= Router()

router.post('/',postCamper);

export default router