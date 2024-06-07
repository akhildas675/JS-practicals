let arr = [
    { book: 'one', price: 170 },
    { book: 'two', price: 200 },
    { book: 'three', price: 130 }
  ];


  arr.sort((a,b)=>b.price-a.price)
  let result=arr[0].price
  console.log(result);