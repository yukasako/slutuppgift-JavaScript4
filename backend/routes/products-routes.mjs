import express from 'express';
import {
  findProducts,
  listProducts,
} from '../controllers/products-controller.mjs';

const router = express.Router();
router.route('/').get(listProducts);
router.route('/:id').get(findProducts);

export default router;
