/*Write a function to sum all the phone prices */
const phones = [
    {
      title: 'Oppo',
      price: 15000.00,
    },
    {
      title: 'Sumsang',
      price: 25000.00,
    },
    {
      title: 'tecno',
      price: 42000.00,
    }
  ];
/* Answer */
  function sumPrices(phones) {
    return phones.reduce((sum, phone) => sum + phone.price, 0);
  };
  
console.log(sumPrices(phones)); 
                                