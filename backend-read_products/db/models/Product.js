import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  product: {
    name: String,
    description: String,
    price: Number,
    currency: String,
    required: true,
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
