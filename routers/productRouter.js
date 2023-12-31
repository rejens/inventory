import express from "express";

import {
   getProducts,
   addProduct,
   deleteProduct,
   editProduct,
   fetchProductById,
   fetchAboutToExpireProduct,
   fetchProductsWithLowInventory,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts).post(addProduct);
router.route("/expire").get(fetchAboutToExpireProduct);
router.route("/lowInventory").get(fetchProductsWithLowInventory);
router
   .route("/:id")
   .delete(deleteProduct)
   .put(editProduct)
   .get(fetchProductById);

export default router;
