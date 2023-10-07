import express from "express";

import { getSales, addSale } from "../controllers/salesController.js";

const router = express.Router();

router.route("/").get(getSales).post(addSale);

export default router;
