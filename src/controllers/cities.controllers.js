import httpStatus from "http-status"
import citiesServices from "../services/cities.services.js"

export async function createCity(req,res){
    const {name} = req.body
    await citiesServices.createCity(name)
    res.sendStatus(httpStatus.CREATED)
}