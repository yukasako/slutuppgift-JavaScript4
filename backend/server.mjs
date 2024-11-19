import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import { products } from './products.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

// Corsで分岐
app.use(cors());
// app.use('/api/cart', cart);
// app.use('/api/products', products);

app.get('/', (req, res) => {
  res.status(200).json({ success: true, result: 'Result' });
});

// サーバー起動
app.listen(3001, () => console.log(`Server is running at port: ${PORT}`));
