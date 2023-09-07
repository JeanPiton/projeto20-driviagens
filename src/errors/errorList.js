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

const errorList = {
    invalidInput,
    conflictError,
    notFoundError
}

export default errorList