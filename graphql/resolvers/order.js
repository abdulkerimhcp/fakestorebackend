const Order = require("../../models/Order");
module.exports = {
  Query: {},
  Mutation: {
    async addOrder(
      _,
      {
        userId,
        name,
        adress,
        product: { id, title, price, description, category, image },
      },
      context,
      info
    ) {
      const newOrder = new Order({
        userId,
        name,
        adress,
        product: [
          {
            id,
            title,
            price,
            description,
            category,
            image,
          },
        ],
      });

      const res = await newOrder.save();

      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
};
