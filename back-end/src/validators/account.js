const joi = require('@hapi/joi')
const {getValidatorError} = require('../helpers/validator')

const rules = {
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    password_confirmation: joi.string().valid(joi.ref('password')).required()
}

const accountSignUp = (req, res, next) => {
    const { email, password, password_confirmation} = req.body;
    
    const schema = joi.object({
        email: rules.email,
        password: rules.password,
        password_confirmation: rules.password_confirmation
    })

    const options = {abortEarly: false}
    const {error} = schema.validate({email, password, password_confirmation}, options)

    if(error){

        const messages = getValidatorError(error, 'account.signup')
        return res.jsonBadRequest(null, null, {error: messages})
    }
    

    next()
}

const accountSignIn = (req, res, next) => {
    const { email, password} = req.body;
    
    const schema = joi.object({
       email: rules.email,
       password: rules.password
    })

    const options = {abortEarly: false}
    const {error} = schema.validate({email, password}, options)

    if(error){

        const messages = getValidatorError(error, 'account.signin')
        return res.jsonBadRequest(null, null, {error: messages})
    }
    

    next()
}

module.exports = {accountSignUp, accountSignIn}