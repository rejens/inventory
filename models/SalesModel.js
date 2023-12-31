import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema(
   {
      user: { type: mongoose.Schema.ObjectId, ref: "users" },
      product: { type: mongoose.Schema.ObjectId, ref: "products" },
      quantity: { type: Number, required: true },
      customerName: { type: String, required: true },
   },
   {
      timestamps: true,
   }
);

const Sales = mongoose.model("sales", SalesSchema);
export default Sales;
