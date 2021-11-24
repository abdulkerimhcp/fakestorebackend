const { model, Schema } = require("mongoose");

const orderSchema = new Schema({
  id: Number,
  userId: String,
  name:String,
  adress:String,
  product: 
    {
      id: Number,
      title: String,
      price: Number,
      description: String,
      category: String,
      image: String,
    },
  
});

module.exports = model("Order", orderSchema);
