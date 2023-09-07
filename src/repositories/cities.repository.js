import { db } from "../database/database.connection.js";

async function createCity(name){
    await db.query(`INSERT INTO cities(name) VALUES ($1);`,[name])
}

async function findCityByName(name){
    return db.query(`SELECT name FROM cities WHERE name = $1`,[name])
}

async function findCityById(id){
    return db.query(`SELECT * FROM cities WHERE id = $1`,[id])
}

const citiesRepository = {
    createCity,
    findCityByName,
    findCityById
}
export default citiesRepository