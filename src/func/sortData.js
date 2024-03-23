// const products = [
//   { id: 1, product: "Laptop", price: 7200 },
//   { id: 2, product: "Headphones", price: 6000 },
//   { id: 3, product: "Mouse", price: 2000 },
//   { id: 4, product: "keyboard", price: 4200 },
//   { id: 5, product: "desktop", price: 10800 },
// ];

// price가 높은 순으로 정렬된 List를 반환하는 함수를 작성해주세요.
export const sortByHighPrice = (products) => {
  return products.sort((a, b) => b.price - a.price);
};

// price가 6000 이상인 제품들의 인덱스를 찾아, 해당 제품들의 이름을 배열로 반환하는 함수를 작성해주세요
export const priceMoreThan6000 = (products) => {
  const temp = products.filter((product) => product.price >= 6000);
  const temp2 = [];
  for (let i of temp) {
    temp2.push(i.product);
  }
  return temp2;
};
