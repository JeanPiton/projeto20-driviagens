import errorList from "../errors/errorList.js"
import flightsRepository from "../repositories/flights.repository.js"
import passengerRepository from "../repositories/passengers.repository.js"
import travelsRepository from "../repositories/travels.repository.js"

async function createTravel(passengerId,flightId){
    let passengerValid = await passengerRepository.findPassengerById(passengerId)
    let flightValid = await flightsRepository.findFlightById(flightId)
    if(passengerValid.rows.length == 0) throw errorList.notFoundError("passenger")
    if(flightValid.rows.length == 0) throw errorList.notFoundError("flight")
    return travelsRepository.createTravel(passengerId,flightId)
}

const travelsServices = {
    createTravel
}
export default travelsServices