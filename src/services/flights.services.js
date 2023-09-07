import errorList from "../errors/errorList.js"
import citiesRepository from "../repositories/cities.repository.js"
import flightsRepository from "../repositories/flights.repository.js"

async function createFlight(origin,destination,date){
    if(origin == destination) throw errorList.conflictError("origin and destination", "can't be the same")
    let originValid = await citiesRepository.findCityById(origin)
    let destinationValid = await citiesRepository.findCityById(destination)
    if(originValid.rows.length == 0) throw errorList.notFoundError("origin id")
    if(destinationValid.rows.length == 0) throw errorList.notFoundError("destination id")
    let splitDate = date.split("-")
    if(Date.now()>= new Date(splitDate[2],splitDate[1]-1,splitDate[0])) throw errorList.invalidInput("date already past")
    return flightsRepository.createFlight(origin,destination,date)
}

const flightsServices = {
    createFlight
}
export default flightsServices