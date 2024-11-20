import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// Corsで分岐
app.use(cors()); // 全てのオリジンを許可
// app.use('/api/cart', cart);
// app.use('/api/products', products);

app.use(express.json());

app.get('/api/products', async (req, res) => {
  // コマンドで npx json-server products.json -p 3001を走らせる。
  const response = await fetch('http://localhost:3001/products');
  if (response.ok) {
    const products = await response.json();
    res.status(200).json({ success: true, products: products });
  }
});

// サーバー起動
app.listen(3000, () => console.log(`Server is running at port: ${PORT}`));
