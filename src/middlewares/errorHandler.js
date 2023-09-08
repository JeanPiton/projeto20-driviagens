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
        case "notFound":
            status = httpStatus.NOT_FOUND
            break
        case "badRequest":
            status = httpStatus.BAD_REQUEST
            break
    }

    res.status(status).send(error.message)
}