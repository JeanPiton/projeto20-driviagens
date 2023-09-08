import { db } from "../database/database.connection.js";

async function createFlight(origin,destination,date){
    await db.query(`INSERT INTO flights(origin,destination,date) VALUES ($1,$2,$3);`,[origin,destination,date])
}

async function findFlightById(id){
    return db.query(`SELECT * FROM flights WHERE id = $1`,[id])
}

async function getFlights(small,big,origin,destination){
    let fsmall = 0,fbig = 0,forigin = 0,fdestination = 0
    if(small==undefined) fsmall = null
    if(big==undefined) fbig = null
    if(origin==undefined) forigin = null
    if(destination==undefined) fdestination = null
    return db.query(`SELECT flights.id, c1.name AS origin, c2.name AS destination, flights.date FROM flights
	JOIN cities AS c1 ON flights.origin = c1.id
	JOIN cities AS c2 ON flights.destination = c2.id
	WHERE (${forigin} IS null OR c1.name = $3) AND (${fdestination} IS null OR c2.name = $4)
	AND (${fsmall} IS null OR flights.date >= $1) AND (${fbig} IS null OR flights.origin <= $2)
	ORDER BY flights.date DESC`,[small,big,origin,destination])
}

const flightsRepository = {
    createFlight,
    findFlightById,
    getFlights
}
export default flightsRepository