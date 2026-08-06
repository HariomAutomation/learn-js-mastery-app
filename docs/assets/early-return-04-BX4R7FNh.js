const t="04-control-flow-early-return-04",e="Guard clause returns 0",n=`function getDiscount(price, isVIP) {
  if (price <= 0) return 0;
  return isVIP ? price * 0.2 : price * 0.1;
}
console.log(getDiscount(-50, true));`,r=`function getDiscount(price, isVIP) {
  if (price <= 0) return 0;
  return isVIP ? price * 0.2 : price * 0.1;
}
console.log(getDiscount(-50, true));`,s=[{input:[],expected:"0"}],i=["price is -50, which is <= 0","Guard clause returns 0"],c={id:t,title:e,starterCode:n,solution:r,tests:s,hints:i};export{c as default,i as hints,t as id,r as solution,n as starterCode,s as tests,e as title};
