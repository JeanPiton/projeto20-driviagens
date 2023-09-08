function invalidInput(message){
    return {
        type:"invalidInput",
        message:message
    }
}

function conflictError(item = "item", message = "alredy exists"){
    return {
        type:"conflict",
        message:`${item} ${message}`
    }
}

function notFoundError(item){
    return {
        type:"notFound",
        message:`${item} not found`
    }
}

function badRequest(message){
    return{
        type:"badRequest",
        message
    }
}

const errorList = {
    invalidInput,
    conflictError,
    notFoundError,
    badRequest
}

export default errorList