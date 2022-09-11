const express = require("express")
 

const TopWatch = require("./controllers/TopWatchController")

const TopPick = require("./controllers/TopPicksController")

const Earbuds = require("./controllers/EarbudsController")

const WierLess = require("./controllers/WirelessController")

const NewLaunches = require("./controllers/NewLaunchesController")

const Gaming = require("./controllers/GamingController")

const Blog = require("./controllers/BlogController")

const Actor = require("./controllers/ActorController")

const About = require("./controllers/AboutController")

const AllProduct = require("./controllers/AllProductController")

 

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
app.use("/earbud", Earbuds)
app.use("/wierless", WierLess)
app.use("/newlaunches", NewLaunches)
app.use("/gaming", Gaming)
app.use("/blog", Blog)
app.use("/actor", Actor)
app.use("/about", About)
app.use("/allproduct", AllProduct)

 

module.exports = app
 

 

 