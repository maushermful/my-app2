const express = require("express");
const app = express();
const mongoose = require("mongoose")
const UserRoute = require("./routes/userRoute")
const bodyParser = require("body-parser");
const cors = require("cors")

app.use(cors())

express.json();
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost/applicationdb', {userNewUrlParser: true})
.then(console.log("mongodb connected!!!"))


app.use('/user', UserRoute)

app.listen(5000, () => {
    console.log("server is running on port 5000!!!")
})
