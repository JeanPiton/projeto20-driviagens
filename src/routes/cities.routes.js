import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { cityNameSchema } from "../schemas/citySchema.js";
import { createCity } from "../controllers/cities.controllers.js";

const cityRouter = Router()

cityRouter.post("/cities",validateSchema(cityNameSchema),createCity)

export default cityRouter