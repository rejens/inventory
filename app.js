import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./utils/database.js";

//routers
import productRouter from "./routers/productRouter.js";
import salesRouter from "./routers/salesRouter.js";
import purchasedRouter from "./routers/purchasedRouter.js";

const app = new express();
app.use(cors());
app.use(express.json());

dotenv.config();
connectDB();

app.use("/api/products", productRouter);
app.use("/api/sales", salesRouter);
app.use("/api/purchased", purchasedRouter);

app.get("/hello", (req, res) => {
   res.send("Hello World");
});

app.listen(5000, () => {
   console.log("Server started on port 5000");
});
