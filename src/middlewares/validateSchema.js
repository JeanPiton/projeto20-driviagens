import errorList from "../errors/errorList.js"

export function validateSchema(schema){
    return (req,res,next)=>{
        const validation = schema.validate(req.body,{abortEarly:false})

        if(validation.error){
            const error = validation.error.details.map(detail=>detail.message)
            console.log(error)
            throw errorList.invalidInput(error)
        }
        next()
    }
}

export function validateParamSchema(schema){
    return (req,res,next)=>{
        const validation = schema.validate(req.params,{abortEarly:false})

        if(validation.error){
            const error = validation.error.details.map(detail=>detail.message)
            throw errorList.invalidInput(error)
        }
        next()
    }
}