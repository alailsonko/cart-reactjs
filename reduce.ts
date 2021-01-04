const products = [
  { id: '1', name: 'A' },
  { id: '1', name: 'A' },
  { id: '1', name: 'A' },
  { id: '2', name: 'A' },
  { id: '3', name: 'A' },
  { id: '3', name: 'A' },
  { id: '2', name: 'A' },
  { id: '2', name: 'A' },
  { id: '1', name: 'A' },
  { id: '5', name: 'A' },
  { id: '6', name: 'A' },
  { id: '1', name: 'A' },

];

interface Product {
  id: string
  name: string
  quantity?: number
}
//
const quantity = products.map((product: Product):Product | void => {
  let count = 0;

  for (let i = 0; i < products.length; i += 1) {
    if (product.id === products[i].id) {
      count += 1;
      product.quantity = count;
    }
  }
  return product;
});

const arrayHashmap = products.reduce((obj: any, item: Product) => {
  obj[item.id] = { ...item };

  return obj;
}, {});

const mergedArray = Object.values(arrayHashmap);

console.log(mergedArray);
console.log(quantity);

console.time('filtered');
// console.log(quantity);
console.timeEnd('filtered');
