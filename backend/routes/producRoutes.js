import express from "express";
// import products from "../data/products.js";
import Product from "../model/productModel.js";
import asyncHandler from "../middleWare/asyncHandler.js";

const router = express.Router();
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
    //   res.json(products);
  })
);
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    console.log(req);
    // const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }

    res.status(404);
    throw new Error("Resource Not Found");
  })
);
export default router;
