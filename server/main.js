
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const product = require('./productRoute/productRoute')

const app = express();

app.use(bodyParser.json({extended : true, limit: "5mb"}))
app.use(bodyParser.urlencoded({extended : true, limit: "5mb"}))
app.use(express.json({extended:true , limit:"5mb"}))

app.use(cors())

// create a coustom route 
app.use('/api/v1', product)

const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL).then(() => {
    console.log("db is conneted");
}).catch((err) => {
    console.log("database is note connected =====>");
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("server is running");
    console.log("database is connected ", PORT);
})