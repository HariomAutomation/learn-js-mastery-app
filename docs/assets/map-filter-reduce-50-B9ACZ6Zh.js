const t="07-arrays-map-filter-reduce-50",e="Map Filter Reduce Complete",n=`const products = [
  {name: 'apple', price: 1.5, inStock: true},
  {name: 'banana', price: 0.5, inStock: true},
  {name: 'cherry', price: 3, inStock: false}
];
const totalInStock = products.filter(p => p.inStock).map(p => p.price).reduce((a, b) => a + b, 0);
console.log(totalInStock);`,c=`const products = [
  {name: 'apple', price: 1.5, inStock: true},
  {name: 'banana', price: 0.5, inStock: true},
  {name: 'cherry', price: 3, inStock: false}
];
const totalInStock = products.filter(p => p.inStock).map(p => p.price).reduce((a, b) => a + b, 0);
console.log(totalInStock);`,o=[{input:[],expected:"2"}],r=["Filter in stock, map price","Sum prices"],a={id:t,title:e,starterCode:n,solution:c,tests:o,hints:r};export{a as default,r as hints,t as id,c as solution,n as starterCode,o as tests,e as title};
