const s="06-functions-closures-iife-17",t="IIFE Async",n=`(async function() {
  const result = await Promise.resolve(42);
  console.log(result);
})();`,o=`(async function() {
  const result = await Promise.resolve(42);
  console.log(result);
})();`,e=[{input:[],expected:"42"}],c=["Async IIFE","Await in closure"],i={id:s,title:t,starterCode:n,solution:o,tests:e,hints:c};export{i as default,c as hints,s as id,o as solution,n as starterCode,e as tests,t as title};
