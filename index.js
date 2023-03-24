const express = require("express");
const mongoose = require("mongoose");
const port = 8080;
const app = express();
const User = require("./Routes/event")
const url = "mongodb://127.0.0.1:27017/prtTest"
app.use(express.json())
mongoose.connect(url)
.then(()=>{
    console.log("connected to mongodb")
})

//middleware
app.use("/",User)

app.listen(port,()=>{
    console.log(`server is up at ${port}`)
})