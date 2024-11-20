import express from 'express';
import { listProducts } from '../controllers/products-controller.mjs';

const router = express.Router();
router.route('/').get(listProducts);

export default router;
