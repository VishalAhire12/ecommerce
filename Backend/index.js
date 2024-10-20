const express=require("express");
const app=express();
const db=require("./db/db")
const router=require("./routes/product")
const bodyPraser = require("body-parser");
const cors=require("cors");
const bodyParser = require("body-parser");
require("./db/db")
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());

app.use("/product",router)

app.listen(8000,()=>{
    console.log("server is working ")
})