import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { flightSchema } from "../schemas/flightSchema.js";
import { createFlight } from "../controllers/flights.controllers.js";

const flightRouter = Router()

flightRouter.post("/flights",validateSchema(flightSchema),createFlight)

export default flightRouter