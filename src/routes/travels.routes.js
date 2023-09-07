import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { travelSchema } from "../schemas/travelSchema.js";
import { createTravel } from "../controllers/travels.controllers.js";

const travelRouter = Router()

travelRouter.post("/travels",validateSchema(travelSchema),createTravel)

export default travelRouter