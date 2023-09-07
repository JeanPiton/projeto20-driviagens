function invalidInput(message){
    return {
        type:"invalidInput",
        message:message
    }
}

const errorList = {
    invalidInput
}

export default errorList