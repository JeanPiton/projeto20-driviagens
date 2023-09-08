import { Router } from "express";
import { validateQuerySchema, validateSchema } from "../middlewares/validateSchema.js";
import { passengerName, passengerSchema } from "../schemas/passengerSchema.js";
import { createPassenger } from "../controllers/passengers.controllers.js";

const passengerRouter = Router()

passengerRouter.post("/passengers",validateSchema(passengerSchema),createPassenger)
passengerRouter.get("/passengers/travels",validateQuerySchema(passengerName))

export default passengerRouter