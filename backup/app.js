// const user = require("./users") //import statment
// console.log(user) // Output: amit
// console.log(user.userName) // Output: amit
// console.log(user.userage) // Output: 25
// user.getUserData(1000) // Output: get user data

app.get("/test", (req, res) => {
  console.log("Test API");
  //res.send("Test API");
  res.json({ message: "Test API Called..." });
});

const user = {
  name: "Rahul",
  age: 25,
  city: "Bangalore",
};

const users = [
  {
    id: 1,
    name: "amit",
    age: 23,
  },
  {
    id: 2,
    name: "sumit",
    age: 25,
  },
];

app.get("/user", (req, res) => {
  res.json({
    message: "List of users",
    user: user,
  });
});

app.get("/users", (req, res) => {
  res.json({
    message: "List of users",
    users: users,
  });
});

app.get("/user/:id", (req, res) => {
  //:id ==> params :
  console.log("req params...", req.params);
  const id = req.params.id;
  var findUser = users.find((user) => user.id == id);
  console.log("findUser...", findUser);
  console.log("id...", id);
  if (findUser != undefined) {
    res.json({
      message: "User Details",
      user: findUser,
    });
  } else {
    res.json({
      message: "User not found...",
    });
  }
});


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


//api produce//get post put delete patch

// const userSchema = require("./src/models/UserModel"); //importing userSchema
// //userSchema.find() //find is a method in userSchema

// app.get("/users",async(req,res)=>{

//   const users = await userSchema.find()
//   res.json({
//     message:"List of users",
//     data:users
//   })

// })


// app.get("/users/:id",async(req,res)=>{

//   const id = req.params.id
//   const user = await userSchema.findById(id)
//   if(user){
//     res.json({
//       message:"User found",
//       data:user
//     })
//   }
//   else{
//     res.json({
//       message:"User not found"
//     })
//   }

// })
