import { db } from "../database/database.connection.js";

async function createPassenger(firstName,lastName){
    await db.query(`INSERT INTO passengers("firstName","lastName") VALUES ($1,$2);`,[firstName,lastName])
}

async function findPassengerById(id){
    return db.query(`SELECT * FROM passengers WHERE id = $1`,[id])
}

async function getPassengerTravels(name){
    return db.query(`SELECT CONCAT_WS(' ',passengers."firstName",passengers."lastName") AS passenger, COUNT(travels.id) AS travels 
	FROM passengers
	LEFT JOIN travels ON travels."passengerId" = passengers.id
	WHERE concat_ws(' ',passengers."firstName",passengers."lastName") ILIKE '%$1%'
	GROUP BY passengers.id
	ORDER BY COUNT(travels.id) DESC`,[name])
}

const passengerRepository = {
    createPassenger,
    findPassengerById,
    getPassengerTravels
}
export default passengerRepository