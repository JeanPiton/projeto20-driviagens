import httpStatus from "http-status"
import travelsServices from "../services/travels.services.js"

export async function createTravel(req,res){
    const {passengerId,flightId} = req.body
    await travelsServices.createTravel(passengerId,flightId)
    res.sendStatus(httpStatus.CREATED)
}