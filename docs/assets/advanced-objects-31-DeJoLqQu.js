const t="08-objects-advanced-objects-31",e="DefineProperty Writable",o=`const obj = {};
Object.defineProperty(obj, 'x', {value: 5, writable: true});
obj.x = 10;
console.log(obj.x);`,n=`const obj = {};
Object.defineProperty(obj, 'x', {value: 5, writable: true});
obj.x = 10;
console.log(obj.x);`,s=[{input:[],expected:"10"}],c=["writable: true allows","Assignment works"],r={id:t,title:e,starterCode:o,solution:n,tests:s,hints:c};export{r as default,c as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
