import mongoose from "mongoose";

const PurchasedSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      vendor: { type: String, required: true },
   },
   {
      timestamps: true,
   }
);

const Purchased = mongoose.model("purchases", PurchasedSchema);
export default Purchased;
