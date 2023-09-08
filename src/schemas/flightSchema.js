import Joi from "joi"
import JoiDate from "@joi/date"

const joi = Joi.extend(JoiDate)

export const flightSchema = joi.object({
    origin: joi.number().integer().min(0).required(),
    destination: joi.number().integer().min(0).required(),
    date: joi.date().format('DD-MM-YYYY').required()
})

export const getFlightSchema = joi.object({
    origin: joi.string(),
    destination: joi.string(),
    "smaller-date": joi.date().format('DD-MM-YYYY'),
    "bigger-date":joi.date().format('DD-MM-YYYY')
})