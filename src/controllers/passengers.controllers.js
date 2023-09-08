import httpStatus from "http-status"
import passengerServices from "../services/passengers.services.js"

export async function createPassenger(req,res){
    const {firstName,lastName} = req.body
    await passengerServices.createPassenger(firstName,lastName)
    res.sendStatus(httpStatus.CREATED)
}

export async function getPassengerTravels(req,res){
    const {name} = req.query
    const result = await passengerServices.getPassengerTravels(name)
    res.status(httpStatus.OK).send(result)
}