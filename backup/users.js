console.log("user js file load..")
var userName = "amit"
var userage = 25
//module.exports = userName; // Export the variable userName
//module.exports = userage; // Export the variable userage
var users = {
    name:"parth",
    age:25
}
const getUserData = (x)=>{
    console.log("get user data",x)
}
module.exports = {userName, userage,users,getUserData}; // Export the variable userName and userage
//module.exports = getUserData; // Export the function getUserData