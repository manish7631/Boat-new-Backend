const express = require("express")
 

const TopWatch = require("./controllers/TopWatchController")

const TopPick = require("./controllers/TopPicksController")

 

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
app.use("/toppick", TopPick)

 

module.exports = app
 

 

 