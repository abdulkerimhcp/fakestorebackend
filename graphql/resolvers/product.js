const axios = require("axios");

module.exports = {
  Query: {
    getProducts: async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const Products = response.data;
      return Products;
    },
    getProduct: async (parent, { id }, context, info) => {
      const response = await axios.get(
        "https://fakestoreapi.com/products/" + id
      );
      const Product = response.data;
      return Product;
    },
  },
};
