import httpStatus from "http-status"
import flightsServices from "../services/flights.services.js"

export async function createFlight(req,res){
    const {origin,destination,date} = req.body
    await flightsServices.createFlight(origin,destination,date)
    res.sendStatus(httpStatus.CREATED)
}