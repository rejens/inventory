import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
   {
      user: { type: mongoose.Schema.ObjectId, ref: "users" },
      name: { type: String, required: true },
      costPrice: { type: Number, required: true },
      sellingPrice: { type: Number, required: true },
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
