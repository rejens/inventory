import mongoose from "mongoose";

const PurchasedSchema = new mongoose.Schema(
   {
      user: { type: mongoose.Schema.ObjectId, ref: "users" },
      name: { type: String, required: true },
      costPrice: { type: Number, required: true },
      quantity: { type: Number, required: true },
      vendor: { type: String, required: true },
   },
   {
      timestamps: true,
   }
);

const Purchased = mongoose.model("purchases", PurchasedSchema);
export default Purchased;
