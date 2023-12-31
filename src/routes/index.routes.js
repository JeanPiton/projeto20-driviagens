import { Router } from "express";
import passengerRouter from "./passengers.routes.js";
import cityRouter from "./cities.routes.js";
import flightRouter from "./flights.routes.js";

const router = Router()

router.use(passengerRouter)
router.use(cityRouter)
router.use(flightRouter)

export default router