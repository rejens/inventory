import Sales from "../models/SalesModel.js";

// @desc    Fetch all sales data
// @route   GET /api/sales
export const getSales = async (req, res, next) => {
   try {
      const response = await Sales.find({})
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
      const { name, price, quantity, customerName } = req.body;
      const response = await Sales.create(req.body);
      console.log(response);
      console.log(req.body);
      res.status(201).json(response);
   } catch (error) {
      next(error);
   }
};
