export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  category: Category;
  image: string;
}

export enum Category {
  BOX,
  FIGURINE,
  LAMP,
  ORNAMENT,
  SOCK,
  WREATH,
  TREE,
  CANDLE,
}
