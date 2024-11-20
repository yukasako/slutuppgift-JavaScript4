import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routerToProducts from './routes/products-routes.mjs';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
console.log(PORT);

// Corsで分岐
app.use(cors()); // 全てのオリジンを許可
app.use(express.json()); //JSON形式のリクエストボディを解析 し、req.body に利用可能な形で格納する便利なミドルウェアです。
app.use('/api/products', routerToProducts); //
// app.use('/api/cart', cart);

// サーバー起動
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
