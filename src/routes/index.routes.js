import { Router } from "express";
import passengerRouter from "./passengers.routes.js";
import cityRouter from "./cities.routes.js";

const router = Router()

router.use(passengerRouter)
router.use(cityRouter)

export default router