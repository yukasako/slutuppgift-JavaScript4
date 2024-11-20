import { Item } from './data-model';
// import { Category } from './data-model';

const dummyData: Item[] = [
  {
    id: 1,
    name: 'Gift box with ribbon',
    price: 100,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'box',
    image: 'box-1',
    quantity: 2,
  },
  {
    id: 2,
    name: 'Gift box with ribbon',
    price: 120,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'box',
    image: 'box-2',
    quantity: 2,
  },
  {
    id: 3,
    name: 'Gift box with ribbon',
    price: 150,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'box',
    image: 'box-3',
    quantity: 2,
  },
  {
    id: 4,
    name: 'Candle',
    price: 50,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'candle',
    image: 'candle-1',
    quantity: 2,
  },
  {
    id: 5,
    name: 'Candle with a pine',
    price: 70,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'candle',
    image: 'candle-2',
    quantity: 2,
  },
  {
    id: 6,
    name: 'Santa Figurine',
    price: 90,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'figurine',
    image: 'figurine-1',
    quantity: 2,
  },
  {
    id: 7,
    name: 'Figurine',
    price: 110,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'figurine',
    image: 'figurine-2',
    quantity: 2,
  },
  {
    id: 8,
    name: 'Figurine',
    price: 130,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'figurine',
    image: 'figurine-3',
    quantity: 2,
  },
  {
    id: 9,
    name: 'Lamp',
    price: 200,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'lamp',
    image: 'lamp-1',
    quantity: 2,
  },
  {
    id: 10,
    name: 'Lamp',
    price: 220,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'lamp',
    image: 'lamp-2',
    quantity: 2,
  },
  {
    id: 11,
    name: 'Ornament',
    price: 30,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'ornament',
    image: 'ornament-1',
    quantity: 2,
  },
  {
    id: 12,
    name: 'Ornament',
    price: 35,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'ornament',
    image: 'ornament-2',
    quantity: 2,
  },
  {
    id: 13,
    name: 'Ornament',
    price: 40,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'ornament',
    image: 'ornament-3',
    quantity: 2,
  },
  {
    id: 14,
    name: 'Ornament',
    price: 45,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'ornament',
    image: 'ornament-4',
    quantity: 2,
  },
  {
    id: 15,
    name: 'Ornament',
    price: 50,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'ornament',
    image: 'ornament-5',
    quantity: 2,
  },
  {
    id: 16,
    name: 'Sock',
    price: 20,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'sock',
    image: 'sock-1',
    quantity: 2,
  },
  {
    id: 17,
    name: 'Sock',
    price: 25,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'sock',
    image: 'sock-2',
    quantity: 2,
  },
  {
    id: 18,
    name: 'Christmas Tree',
    price: 300,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'tree',
    image: 'tree-1',
    quantity: 2,
  },
  {
    id: 19,
    name: 'Christmas Tree',
    price: 350,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'tree',
    image: 'tree-2',
    quantity: 2,
  },
  {
    id: 20,
    name: 'Christmas Tree',
    price: 400,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'tree',
    image: 'tree-3',
    quantity: 2,
  },
  {
    id: 21,
    name: 'Christmas Tree',
    price: 450,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'tree',
    image: 'tree-4',
    quantity: 2,
  },
  {
    id: 22,
    name: 'Christmas Tree',
    price: 500,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'tree',
    image: 'tree-5',
    quantity: 2,
  },
  {
    id: 23,
    name: 'Wreath',
    price: 60,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'wreath',
    image: 'wreath-1',
    quantity: 2,
  },
  {
    id: 24,
    name: 'Wreath',
    price: 70,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'wreath',
    image: 'wreath-2',
    quantity: 2,
  },
  {
    id: 25,
    name: 'Wreath',
    price: 80,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'wreath',
    image: 'wreath-3',
    quantity: 2,
  },
  {
    id: 26,
    name: 'Wreath',
    price: 90,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
    category: 'wreath',
    image: 'wreath-4',
    quantity: 2,
  },
];

export default dummyData;
