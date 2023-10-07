import express from "express";
import asyncHandler from "express-async-handler";
import ProductModel from "../models/ProductModel.js";

// @desc    Fetch all products
// @route   GET /api/products
export const getProducts = asyncHandler(async (req, res) => {
   const response = await ProductModel.find({});
   res.json(response);
});

// @desc    add product
// @route   POST /api/products
export const addProduct = asyncHandler(async (req, res) => {
   const request = req.body;
   console.log(request);
   const createdProduct = await ProductModel.create(request);
   res.status(201).json(createdProduct);
});

// @desc    delete product
// @route   DELETE /api/products/:id
export const deleteProduct = asyncHandler(async (req, res) => {
   const id = req.params.id;
   const deletedProduct = await ProductModel.findByIdAndDelete(id);
   res.status(201).json(deletedProduct);
});

// @desc    edit product
// @route   PUT /api/products/:id
export const editProduct = asyncHandler(async (req, res) => {
   const id = req.params.id;
   const request = req.body;
   const editProduct = await ProductModel.findByIdAndUpdate(id, request, {
      new: true,
   });
   res.status(201).json(editProduct);
});

// @desc    fetch about to expire product
// @route   PUT /api/products/expire
export const fetchAboutToExpireProduct = asyncHandler(async (req, res) => {
   //
   var today = new Date();
   var addDays = new Date(today);
   addDays.setDate(today.getDate() + 30);
   var formattedDate = addDays.toISOString().substr(0, 10);
   //
   const fetchProduct = await ProductModel.find({
      expiryDate: { $lt: formattedDate, $gt: today },
   });
   res.status(200).json(fetchProduct);
});

//@desc     fetch product using id
//@route    GET /api/products/:id
export const fetchProductById = asyncHandler(async (req, res) => {
   console.log("fetch produc tby id");
   const id = req.params.id;
   const fetchProduct = await ProductModel.findById(id);
   res.status(200).json(fetchProduct);
});
