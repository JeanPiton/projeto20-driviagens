function invalidInput(message){
    return {
        type:"invalidInput",
        message:message
    }
}

function conflictError(item = "item"){
    return {
        type:"conflict",
        message:`${item} alredy exists`
    }
}

const errorList = {
    invalidInput,
    conflictError
}

export default errorList