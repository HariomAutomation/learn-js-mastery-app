const t="04-control-flow-early-return-03",e="Guard clause pattern",n=`function getDiscount(price, isVIP) {
  if (price <= 0) return 0;
  return isVIP ? price * 0.2 : price * 0.1;
}
console.log(getDiscount(100, true));`,i=`function getDiscount(price, isVIP) {
  if (price <= 0) return 0;
  return isVIP ? price * 0.2 : price * 0.1;
}
console.log(getDiscount(100, true));`,s=[{input:[],expected:"20"}],r=["price is 100, not <= 0","isVIP is true, so 20% discount"],o={id:t,title:e,starterCode:n,solution:i,tests:s,hints:r};export{o as default,r as hints,t as id,i as solution,n as starterCode,s as tests,e as title};
