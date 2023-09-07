import joi from "joi"

export const cityNameSchema = joi.object({
    name: joi.string().required().min(2).max(50)
})