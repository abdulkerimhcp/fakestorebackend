const usersResolvers = require("./user");
const productsResolvers = require("./product");
const wishlistsResolvers = require("./wishlist");


module.exports = {
  Query: {
    ...usersResolvers.Query,
    ...productsResolvers.Query,
    ...wishlistsResolvers.Query,

  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...wishlistsResolvers.Mutation,

  },
};
