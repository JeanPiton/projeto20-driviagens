import { db } from "../database/database.connection.js";

async function createPassenger(firstName,lastName){
    await db.query(`INSERT INTO passengers("firstName","lastName") VALUES ($1,$2);`,[firstName,lastName])
}

async function findPassengerById(id){
    return db.query(`SELECT * FROM passengers WHERE id = $1`,[id])
}

const passengerRepository = {
    createPassenger,
    findPassengerById
}
export default passengerRepository