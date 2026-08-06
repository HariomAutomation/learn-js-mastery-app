const t="13-oop-prototypes-this-48",s="Apply Array Args",o=`function sum(a, b, c) { return a + b + c; }
console.log(sum.apply(null, [1, 2, 3]));`,n=`function sum(a, b, c) { return a + b + c; }
console.log(sum.apply(null, [1, 2, 3]));`,a=[{input:[],expected:"6"}],e=["apply takes args as array","Same as call with array"],l={id:t,title:s,starterCode:o,solution:n,tests:a,hints:e};export{l as default,e as hints,t as id,n as solution,o as starterCode,a as tests,s as title};
