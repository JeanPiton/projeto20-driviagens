import { db } from "../database/database.connection.js";

async function createPassenger(firstName,lastName){
    await db.query(`INSERT INTO passengers("firstName","lastName") VALUES ($1,$2);`,[firstName,lastName])
}

const passengerRepository = {
    createPassenger
}
export default passengerRepository