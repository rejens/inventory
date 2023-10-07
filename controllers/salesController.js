import Sales from "../models/SalesModel.js";

import asyncHandler from "express-async-handler";

// @desc    Fetch all sales data
// @route   GET /api/sales

export const getSales = asyncHandler(async (req, res) => {
   const response = await Sales.find({}).sort({ createdAt: -1 });
   res.json(response);
});

// @desc    Add sales data
// @route   POST /api/sales

export const addSale = asyncHandler(async (req, res) => {
   const { name, price, quantity, customerName } = req.body;
   const response = await Sales.create({
      name,
      price,
      quantity,
      customerName,
   });
   res.status(201).json(response);
});
