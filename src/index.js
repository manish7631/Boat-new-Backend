const express = require("express")
 

const TopWatch = require("./controllers/TopWatchController")

 

const app = express()
 app.use(express.json())
 app.get("/", async(req, res) => {
    try{
         res.status(200).send("Welcome to the clone of  boat")
     }
    catch(err) {
         res.status(400).send(err)
     }
 })

 
app.use("/topwatch", TopWatch)

if(process.env.NODE_ENV == "production"){
    app.use(express.static("Boat-LifeStyle/build"))
}
 

module.exports = app
 

 

 