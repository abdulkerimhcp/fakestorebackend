const { model, Schema } = require("mongoose");

const wishlistSchema = new Schema({
  id: Number,
  userId: String,
  product: {
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
  },
});

module.exports = model("Wishlist", wishlistSchema);
