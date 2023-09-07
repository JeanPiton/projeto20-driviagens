import errorList from "../errors/errorList.js"
import citiesRepository from "../repositories/cities.repository.js"

async function createCity(name){
    const exists = await citiesRepository.findCityByName(name)
    if(exists.rows.length!=0) throw errorList.conflictError(`City ${name}`)
    return citiesRepository.createCity(name)
}

const citiesServices = {
    createCity
}
export default citiesServices