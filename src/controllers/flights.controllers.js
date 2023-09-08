import httpStatus from "http-status"
import flightsServices from "../services/flights.services.js"

export async function createFlight(req,res){
    const {origin,destination,date} = req.body
    await flightsServices.createFlight(origin,destination,date)
    res.sendStatus(httpStatus.CREATED)
}

export async function getFlights(req,res){
    const {"smaller-date":small, "bigger-date":big, origin, destination} = req.query
    const {rows} = await flightsServices.getFlights(small,big,origin,destination)
    res.status(httpStatus.OK).send(rows)
}