const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name:{type:String, required:true},
    Img_url:{type:String, required:true},
    Desc:{type:String, required:true},
    Type:{type:String, required:true}
  },
  {
    versionKey: false,
    timestamps: true, 
  }
  )
  
  const Product = mongoose.model("actor", productSchema);
  

  module.exports = Product;