import passengerRepository from "../repositories/passengers.repository.js"

async function createPassenger(firstName,lastName){
    return passengerRepository.createPassenger(firstName,lastName)
}

const passengerServices = {
    createPassenger
}
export default passengerServices