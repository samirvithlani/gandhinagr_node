const fs = require('fs');
const writeDatatoFile = (fileName, data) => {

    fs.writeFileSync(fileName,data)
    console.log("Data written to file successfully")
}

const readDataFromFile= (fileName)=>{

    return fs.readFileSync(fileName,'utf8')
}
const writeJsonObjectToFile = (fileName,data) => {

        fs.writeFileSync(fileName,data)

}
const writeCProgramToFile = (fileName,data) => {

    fs.writeFileSync(fileName,data)

}
module.exports = {writeDatatoFile,readDataFromFile,writeJsonObjectToFile,writeCProgramToFile};