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

function tooManyResults(){
    return{
        type:"tooManyResults",
        message:"Too many results"
    }
}

const errorList = {
    invalidInput,
    conflictError,
    notFoundError,
    badRequest,
    tooManyResults
}

export default errorList