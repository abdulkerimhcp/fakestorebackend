const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Rating {
    rate: Float
    count: Int
  }

  type Product {
    id: Int
    title: String
    price: Float
    description: String
    category: String
    image: String
    rating: Rating
  }

  input Productt {
    id: Int
    title: String
    price: Float
    description: String
    category: String
    image: String
  }
  type Producttt {
    id: Int
    title: String
    price: Float
    description: String
    category: String
    image: String
  }

  type Wishlist {
    id: ID!
    userId: String
    product: Producttt
  }

  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
    getWishlist(userId: String!): [Wishlist]
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    addWishlist(userId: String!, product: Productt): Wishlist!
  }
`;
