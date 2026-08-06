const t="04-control-flow-early-return-47",n="Nested guard refactor - flat",e=`function getDiscount(tier, amount) {
  if (!tier) return 0;
  if (tier === 'gold') return amount * 0.3;
  if (tier === 'silver') return amount * 0.2;
  if (tier === 'bronze') return amount * 0.1;
  return 0;
}
console.log(getDiscount('silver', 100));`,r=`function getDiscount(tier, amount) {
  if (!tier) return 0;
  if (tier === 'gold') return amount * 0.3;
  if (tier === 'silver') return amount * 0.2;
  if (tier === 'bronze') return amount * 0.1;
  return 0;
}
console.log(getDiscount('silver', 100));`,o=[{input:[],expected:"20"}],i=["tier is truthy","tier is 'silver'","Returns 20% of 100"],s={id:t,title:n,starterCode:e,solution:r,tests:o,hints:i};export{s as default,i as hints,t as id,r as solution,e as starterCode,o as tests,n as title};
