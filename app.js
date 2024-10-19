const express = require("express"); //importing express module
require("./src/util/db");
const cors = require("cors");
const app = express(); //creating express object
app.use(cors());
app.use(express.json()); //middleware to parse json data



const userRoutes = require("./src/routes/UserRoutes"); //importing userRoutes
const roleRoutes = require("./src/routes/RoleRoutes")
const uploadRoutes = require("./src/routes/UploadRoutes"); //importing uploadRoutes
app.use("/user",userRoutes); //using userRoutes
app.use("/role",roleRoutes)
app.use("/upload",uploadRoutes); //using uploadRoutes
//localhost:3001/user/users



const PORT = 3001; //port number

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
