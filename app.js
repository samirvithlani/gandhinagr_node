const express = require("express"); //importing express module
require("./src/util/db");
const app = express(); //creating express object
app.use(express.json()); //middleware to parse json data


const userRoutes = require("./src/routes/UserRoutes"); //importing userRoutes
const roleRoutes = require("./src/routes/RoleRoutes")
app.use("/user",userRoutes); //using userRoutes
app.use("/role",roleRoutes)
//localhost:3001/user/users



const PORT = 3001; //port number

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
