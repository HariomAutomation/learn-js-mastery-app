const e="04-control-flow-early-return",t="Early return se validation karo",r=`// Early return pattern — step by step check
function placeOrder(product) {
  // 1. Agar product nahi → "No product"
  // 2. Agar out of stock → "Out of stock"
  // 3. Agar price > budget (1000) → "Too expensive"
  // 4. Sab sahi → "Order placed"
}

console.log(placeOrder(null))
console.log(placeOrder({ name: "Phone", inStock: false, price: 500 }))
console.log(placeOrder({ name: "Laptop", inStock: true, price: 5000 }))
console.log(placeOrder({ name: "Book", inStock: true, price: 200 }))
`,o=`function validateOrder(product) {
  if (!product) return "No product"
  if (!product.inStock) return "Out of stock"
  if (product.price > 999) return "Too expensive"
  return "Order placed"
}`,n=[{input:[],expected:"No product"}],c=["Har edge case pe return — nesting avoid","Order: null check pehle, phir flags"],a={id:e,title:t,starterCode:r,solution:o,tests:n,hints:c};export{a as default,c as hints,e as id,o as solution,r as starterCode,n as tests,t as title};
