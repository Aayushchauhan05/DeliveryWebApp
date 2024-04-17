const express= require("express");
const bodyParser = require('body-parser');
const connectdb = require("./mongodb/db");
const router = require("./routes/Authroute");
const app= express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use("/Auth",router)
connectdb().then(()=>{
    app.listen(5400,()=>{
        console.log("server is connected");
    })

})