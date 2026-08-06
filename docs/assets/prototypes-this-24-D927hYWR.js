const t="13-oop-prototypes-this-24",s="Apply Array",o=`function sum(a, b) { return a + b; }
console.log(sum.apply(null, [1, 2]));`,n=`function sum(a, b) { return a + b; }
console.log(sum.apply(null, [1, 2]));`,a=[{input:[],expected:"3"}],e=["apply takes args as array","Same as call but with array"],l={id:t,title:s,starterCode:o,solution:n,tests:a,hints:e};export{l as default,e as hints,t as id,n as solution,o as starterCode,a as tests,s as title};
