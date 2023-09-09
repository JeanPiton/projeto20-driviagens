import errorList from "../errors/errorList.js"
import passengerRepository from "../repositories/passengers.repository.js"

async function createPassenger(firstName,lastName){
    return passengerRepository.createPassenger(firstName,lastName)
}

async function getPassengerTravels(name){
    name = name==undefined?'':name
    const {rows} = await passengerRepository.getPassengerTravels(name)
    if(rows.length>10) throw errorList.tooManyResults()
    return rows
}

const passengerServices = {
    createPassenger,
    getPassengerTravels
}
export default passengerServices