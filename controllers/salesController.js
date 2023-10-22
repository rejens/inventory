import Sales from "../models/SalesModel.js";

// @desc    Fetch all sales data
// @route   GET /api/sales
export const getSales = async (req, res, next) => {
   try {
      const response = await Sales.find({ user: req.body.user })
         .sort({ createdAt: -1 })
         .populate("product");
      res.json(response);
   } catch (error) {
      next(error);
   }
};

// @desc    Add sales data
// @route   POST /api/sales
export const addSale = async (req, res, next) => {
   try {
      const response = await Sales.create(req.body);
      res.status(201).json(response);
   } catch (error) {
      next(error);
   }
};
