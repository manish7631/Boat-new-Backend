const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   
    Desc:{type:String, required:true},
    Img_url:{type:String, required:true},
  },
  {
    versionKey: false,
    timestamps: true, 
  }
  )
  
  const Product = mongoose.model("Blog", productSchema);
  

  module.exports = Product;