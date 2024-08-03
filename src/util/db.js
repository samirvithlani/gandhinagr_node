const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/node_gnr_gen").then(()=>{
    console.log("Connection successful");
}).catch((e)=>{
    console.log("No connection");
    console.log(e);
})

