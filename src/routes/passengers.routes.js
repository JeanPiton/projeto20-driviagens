import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passengerSchema } from "../schemas/passengerSchema.js";
import { createPassenger } from "../controllers/passengers.controllers.js";

const passengerRouter = Router()

passengerRouter.post("/passengers",validateSchema(passengerSchema),createPassenger)

export default passengerRouter