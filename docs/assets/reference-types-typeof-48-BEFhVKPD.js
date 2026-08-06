const e="02-data-types-reference-types-typeof-48",t="Frozen object can't be modified",o=`const obj = Object.freeze({ x: 1 });
obj.x = 2;
console.log();`,n=`const obj = Object.freeze({ x: 1 });
obj.x = 2;
console.log(obj.x);`,s=[{input:[],expected:"1"}],c=["freeze prevents modifications","Silently fails in non-strict mode"],i={id:e,title:t,starterCode:o,solution:n,tests:s,hints:c};export{i as default,c as hints,e as id,n as solution,o as starterCode,s as tests,t as title};
