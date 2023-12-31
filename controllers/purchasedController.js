import Purchased from "../models/PurchasedModel.js";

// @desc    Fetch all purchased data
// @route   GET /api/purchased

export const getPurchased = async (req, res, next) => {
   try {
      const response = await Purchased.find({ user: req.body.user }).sort({
         createdAt: -1,
      });
      res.status(200).json(response);
   } catch (error) {
      next(error);
   }
};

// @desc    Add purchased data
// @route   POST /api/purchased

export const addPurchased = async (req, res, next) => {
   try {
      console.log("purchased", req.body);
      const response = await Purchased.create(req.body);
      console.log("purchase response ", response);
      res.status(201).json(response);
   } catch (error) {
      next(error);
   }
};
