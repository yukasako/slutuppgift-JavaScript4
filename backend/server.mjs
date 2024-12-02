import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routerToProducts from './routes/products-routes.mjs';
import routerToCart from './routes/cart-routes.mjs';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// Corsで分岐
app.use(cors()); // 全てのオリジンを許可
app.use(express.json()); //JSON形式のリクエストボディを解析し、req.bodyに利用可能な形で格納する便利なミドルウェアです。
app.use('/api/products', routerToProducts);
app.use('/api/cart', routerToCart);

// Run server
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
// http://localhost:3000/api/products

// Run json.server by "npx json-server db.json -p 3001"
// npx json-server db.json -p 3001
