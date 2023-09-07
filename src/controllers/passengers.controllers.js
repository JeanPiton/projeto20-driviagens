import httpStatus from "http-status"
import passengerServices from "../services/passengers.services.js"

export async function createPassenger(req,res){
    const {firstName,lastName} = req.body
    await passengerServices.createPassenger(firstName,lastName)
    res.sendStatus(httpStatus.CREATED)
}