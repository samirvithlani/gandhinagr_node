const express = require("express"); //importing express module
require("./src/util/db");
const app = express(); //creating express object


const userRoutes = require("./src/routes/UserRoutes"); //importing userRoutes
app.use("/user",userRoutes); //using userRoutes
//localhost:3001/user/users



const PORT = 3001; //port number

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
