import express from "express";

import {
   getPurchased,
   addPurchased,
} from "../controllers/purchasedController.js";
const router = express.Router();

router.route("/").get(getPurchased).post(addPurchased);

export default router;
