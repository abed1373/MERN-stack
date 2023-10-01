import express from 'express';
import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';

const productRouter = express.Router();

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find();
    res.send(products);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);

    res.send({ createdProducts });
  })
);

productRouter.get(
    '/:slug',
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findOne({ slug: req.params.slug });
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: 'Product not Found' });
      }
    })
  );
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productRouter;
