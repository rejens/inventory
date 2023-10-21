import ProductModel from "../models/ProductModel.js";

// @desc    Fetch all products
// @route   GET /api/products
export const getProducts = async (req, res, next) => {
   try {
      const response = await ProductModel.find({});
      res.json(response);
   } catch (error) {
      next(error);
   }
};

// @desc    add product
// @route   POST /api/products
export const addProduct = async (req, res, next) => {
   try {
      const request = req.body;
      const createdProduct = await ProductModel.create(request);
      res.status(201).json(createdProduct);
   } catch (error) {
      next(error);
   }
};

// @desc    delete product
// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res, next) => {
   try {
      const id = req.params.id;
      const deletedProduct = await ProductModel.findByIdAndDelete(id);
      res.status(201).json(deletedProduct);
   } catch (error) {
      next(error);
   }
};

// @desc    edit product
// @route   PUT /api/products/:id
export const editProduct = async (req, res, next) => {
   try {
      const id = req.params.id;
      const request = req.body;
      const editProduct = await ProductModel.findByIdAndUpdate(id, request, {
         new: true,
      });
      res.status(201).json(editProduct);
   } catch (error) {
      next(error);
   }
};

// @desc    fetch about to expire product
// @route   GET /api/products/expire
export const fetchAboutToExpireProduct = async (req, res, next) => {
   try {
      var today = new Date();
      var addDays = new Date(today);
      addDays.setDate(today.getDate() + 30);
      var formattedDate = addDays.toISOString().substr(0, 10);
      const fetchProduct = await ProductModel.find({
         expiryDate: { $lt: formattedDate, $gt: today },
      });
      res.status(200).json(fetchProduct);
   } catch (error) {
      next(error);
   }
};

//@desc     fetch product using id
//@route    GET /api/products/:id
export const fetchProductById = async (req, res, next) => {
   try {
      console.log("fetch produc tby id");
      const id = req.params.id;
      const fetchProduct = await ProductModel.findById(id);
      res.status(200).json(fetchProduct);
   } catch (error) {
      next(error);
   }
};

//@desc     fetch products with low inventory
//@route    GET /api/products/lowinventory
export const fetchProductsWithLowInventory = async (req, res, next) => {
   try {
      const fetchProduct = await ProductModel.find({ quantity: { $lt: 10 } });
      res.status(200).json(fetchProduct);
   } catch (error) {
      next(error);
   }
};
