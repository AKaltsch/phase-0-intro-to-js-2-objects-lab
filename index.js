// Write your solution in this file!
// const employee = {}
// employee.name = 'Sam'

// function updateEmployeeWithKeyAndValue(object, key, value) {
//     const newEmployee = Object.assign({}, object, {[key]: value});
//     return newEmployee
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
//     object[key] = value
//     return object
// }

// function deleteFromEmployeeByKey(object, key) {
//     const newEmployee = Object.assign({}, object)
//     delete newEmployee[key]
//     return newEmployee
// }

// function destructivelyDeleteFromEmployeeByKey(object, key) {
//     delete object[key]
//     return object
// }

const employee = {}
employee.name = "Sam"

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = Object.assign({}, object, {[key]: value})
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromEmployeeByKey(object, key) {
    const newEmployee = Object.assign({}, object)
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key]
    return object
}