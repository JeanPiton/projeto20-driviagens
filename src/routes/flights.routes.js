import { Router } from "express";
import { validateParamSchema, validateSchema, validateQuerySchema } from "../middlewares/validateSchema.js";
import { flightSchema, getFlightSchema } from "../schemas/flightSchema.js";
import { createFlight, getFlights } from "../controllers/flights.controllers.js";

const flightRouter = Router()

flightRouter.post("/flights",validateSchema(flightSchema),createFlight)
flightRouter.get("/flights",validateQuerySchema(getFlightSchema),getFlights)

export default flightRouter