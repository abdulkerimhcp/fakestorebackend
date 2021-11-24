const Wishlist = require("../../models/Wishlist");
module.exports = {
  Query: {
    getWishlist: async (_, { userId }) => {
      const wishlist = await Wishlist.find({
        userId: userId,
      });
      return wishlist;
    },
  },
  Mutation: {
    async addWishlist(
      _,
      { userId, product: { id, title, price, description, category, image } },
      context,
      info
    ) {
      const newWishlist = new Wishlist({
        userId,
        product: {
          id,
          title,
          price,
          description,
          category,
          image,
        },
      });

      const res = await newWishlist.save();

      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
};
