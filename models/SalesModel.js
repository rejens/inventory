import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      customerName: { type: String, required: true, default: "rejens" },
   },
   {
      timestamps: true,
   }
);

const Sales = mongoose.model("sales", SalesSchema);
export default Sales;
