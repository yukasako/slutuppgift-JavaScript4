import express from 'express';
import {
  listCartItems,
  postCartItem,
  updateCartItem,
  deleteCartItem,
} from '../controllers/cart-controller.mjs';

const router = express.Router();
router.route('/').get(listCartItems);
router.route('/post').post(postCartItem);
router.route('/update/:id').put(updateCartItem);
router.route('/delete/:id').delete(deleteCartItem);

export default router;
