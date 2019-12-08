var yup = require('yup')

exports.schemaRegisterEntry = yup.object().shape({
    email: yup.string().email().required(),
    login_name: yup.string().min(8).max(30).required(),
    login_password: yup.string().min(8).max(255).required()
})

exports.schemaProfilEntryPerson = yup.object().shape({
    gender: yup.string(),
    first_name: yup.string(),
    middle_initial: yup.string(),
    last_name: yup.string(),
    email: yup.string(),
    phone_number: yup.string(),
    address_line_1: yup.string(),
    address_line_2: yup.string(),
    address_line_3: yup.string(),
    address_line_4: yup.string(),
    town_city: yup.string(),
    country: yup.string()
})

exports.schemaProfilEntryOrgnisation = yup.object().shape({
    organisation_name: yup.string(),
    email: yup.string(),
    phone_number: yup.string(),
    address_line_1: yup.string(),
    address_line_2: yup.string(),
    address_line_3: yup.string(),
    address_line_4: yup.string(),
    town_city: yup.string(),
    country: yup.string()
})

exports.schemaPasswordChange = yup.object().shape({
    login_password: yup.string()
})
