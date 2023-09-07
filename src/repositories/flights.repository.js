import { db } from "../database/database.connection.js";

async function createFlight(origin,destination,date){
    await db.query(`INSERT INTO flights(origin,destination,date) VALUES ($1,$2,$3);`,[origin,destination,date])
}

async function findFlightById(id){
    return db.query(`SELECT * FROM flights WHERE id = $1`,[id])
}

const flightsRepository = {
    createFlight,
    findFlightById
}
export default flightsRepository