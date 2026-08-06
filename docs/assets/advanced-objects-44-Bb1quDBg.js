const e="08-objects-advanced-objects-44",t="DefineProperties",o=`const obj = {};
Object.defineProperties(obj, {
  x: {value: 1, writable: true},
  y: {value: 2, writable: true}
});
console.log(obj.x + obj.y);`,n=`const obj = {};
Object.defineProperties(obj, {
  x: {value: 1, writable: true},
  y: {value: 2, writable: true}
});
console.log(obj.x + obj.y);`,s=[{input:[],expected:"3"}],i=["defineProperties multiple","Set at once"],r={id:e,title:t,starterCode:o,solution:n,tests:s,hints:i};export{r as default,i as hints,e as id,n as solution,o as starterCode,s as tests,t as title};
