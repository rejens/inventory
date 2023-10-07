import Purchased from "../models/PurchasedModel.js";
import asyncHandler from "express-async-handler";

// @desc    Fetch all purchased data
// @route   GET /api/purchased

export const getPurchased = asyncHandler(async (req, res) => {
   const response = await Purchased.find({}).sort({ createdAt: -1 });
   res.status(200).json(response);
});

// @desc    Add purchased data
// @route   POST /api/purchased

export const addPurchased = asyncHandler(async (req, res) => {
   const response = await Purchased.create(req.body);
   res.status(201).json(response);
});
