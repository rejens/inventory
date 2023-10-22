import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/database.js";

//routers
import productRouter from "./routers/productRouter.js";
import salesRouter from "./routers/salesRouter.js";
import purchasedRouter from "./routers/purchasedRouter.js";
import userRouter from "./routers/userRouter.js";
import authRouter from "./routers/authRouter.js";

//middleware
import errorHandler from "./middleware/errorHandler.js";
import { userAuthorization } from "./middleware/authorization.js";

const app = new express();
app.use(cors());
app.use(express.json());

dotenv.config();
connectDB();

//authentication midldeware
// app.use("/api/products", userAuthorization);

//routers are mounted here
app.use("/api/auth", authRouter);
app.use("/api/products", userAuthorization, productRouter);
app.use("/api/sales", userAuthorization, salesRouter);
app.use("/api/purchased", userAuthorization, purchasedRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(5000, () => {
   console.log("Server started on port 5000");
});
