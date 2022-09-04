const express = require("express")
const Product = require("../models/Actor.Module")
const router = express.Router() 
 
router.get("", async(req, res) => {
    try{

        const page = req.query.page;

        const pagesize = req.query.pagesize

        const skip = (page -1) * pagesize


        const product = await Product.find().skip(skip).limit(pagesize).lean().exec();
  
        return res.status(200).send(product);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
  });
  
  
  router.post("", async(req, res) => {
    try{
        const product = await Product.create(req.body);
  
        return res.status(200).send(product);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
  });
  

  module.exports = router