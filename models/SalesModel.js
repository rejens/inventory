import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      costPrice: { type: Number, required: false },
      sellingPrice: { type: Number, required: false },
      quantity: { type: Number, required: true },
      customerName: { type: String, required: true },
   },
   {
      timestamps: true,
   }
);

const Sales = mongoose.model("sales", SalesSchema);
export default Sales;
