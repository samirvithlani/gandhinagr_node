// const user = require("./users") //import statment
// console.log(user) // Output: amit
// console.log(user.userName) // Output: amit
// console.log(user.userage) // Output: 25
// user.getUserData(1000) // Output: get user data

const fileSystem = require("./filesystem");
//fileSystem.writeDatatoFile("data.txt","Hello this is India")
const fileData = fileSystem.readDataFromFile("data.txt");
//console.log(fileData);
fileSystem.writeJsonObjectToFile(
  "data.json",
  JSON.stringify({ name: "Amit", age: 25 })
);
fileSystem.writeCProgramToFile(
  "program.c",
  'int main(){\n\tprintf("Hello World");\n\treturn 0;\n}'
);
//gcc ${filename} -o temp.exe
