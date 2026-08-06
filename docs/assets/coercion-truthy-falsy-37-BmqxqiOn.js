const t="02-data-types-coercion-truthy-falsy-37",o="Implicit conversion in if condition",n=`const val = "hello";
if (val) {
  console.log("truthy");
} else {
  console.log("falsy");
}`,s=`const val = "hello";
if (val) {
  console.log("truthy");
} else {
  console.log("falsy");
}`,e=[{input:[],expected:"truthy"}],l=["Non-empty strings are truthy","if converts to boolean"],c={id:t,title:o,starterCode:n,solution:s,tests:e,hints:l};export{c as default,l as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
