let datamodel = require('./DataModel')


// console.log(datamodel.Data)
// datamodel.Data[2] = 99
// console.log(datamodel.Data)

function Output() {
    console.log(datamodel.Data)
}

module.exports = { Output };