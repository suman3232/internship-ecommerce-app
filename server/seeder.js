const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.error(err));

const sampleProducts = [
  {
    title: "Blue Jeans",
    price: 1299,
    description: "Trendy denim jeans.",
    category: "clothing",
    image: "https://via.placeholder.com/300x300?text=Blue+Jeans",
    countInStock: 30,
    rating: 4.2,
  },
  {
    title: "Running Shoes",
    price: 2199,
    description: "Comfortable shoes for running.",
    category: "footwear",
    image: "https://via.placeholder.com/300x300?text=Running+Shoes",
    countInStock: 20,
    rating: 4.8,
  },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log("Data inserted");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
