import httpStatus from "http-status";

export default function errorHandler(error,req,res,next){
    let status = httpStatus.INTERNAL_SERVER_ERROR

    switch(error.type){
        case "invalidInput":
            status = httpStatus.UNPROCESSABLE_ENTITY
            break
        case "conflict":
            status = httpStatus.CONFLICT
            break
    }

    res.status(status).send(error.message)
}