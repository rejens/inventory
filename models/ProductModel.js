import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      expiryDate: { type: Date, required: true },
      vendor: { type: String, required: true },
   },
   {
      timestamps: true,
   }
);

const Product = mongoose.model("products", productSchema);
export default Product;
