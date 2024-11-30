import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3000/api/products', () => {
    console.log('Mock server is connected');
    return HttpResponse.json({
      success: true,
      data: [
        {
          id: '1',
          name: 'Gift box with ribbon',
          price: 100,
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
          category: 'box',
          image: 'box-1',
          stock: 2,
          sold: 5,
        },
        {
          id: '5',
          name: 'Candle with a pine',
          price: 70,
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
          category: 'candle',
          image: 'candle-2',
          stock: 2,
          sold: 5,
        },
        {
          id: '11',
          name: 'Ornament',
          price: 30,
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
          category: 'ornament',
          image: 'ornament-1',
          stock: 2,
          sold: 5,
        },
      ],
    });
  }),
];
