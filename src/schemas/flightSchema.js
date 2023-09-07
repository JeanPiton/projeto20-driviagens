import Joi from "joi"
import JoiDate from "@joi/date"

const joi = Joi.extend(JoiDate)

export const flightSchema = joi.object({
    origin: joi.number().integer().min(0).required(),
    destination: joi.number().integer().min(0).required(),
    date: joi.date().format('DD-MM-YYYY').required()
})