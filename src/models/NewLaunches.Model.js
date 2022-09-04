const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name:{type:String, required:true},
    ActualPrice:{type:Number, required:true},
    LatestPrice:{type:Number, required:true},
    Reviews:{type:Number, required:true},
    Rating:{type:Number, required:true},
    Img_url:{type:String, required:true},
    Desc:{type:String, required:true},
    Type:{type:String, required:true}
  },
  {
    versionKey: false,
    timestamps: true, 
  }
  )
  
  const Product = mongoose.model("NewLaunches", productSchema);
  

  module.exports = Product;