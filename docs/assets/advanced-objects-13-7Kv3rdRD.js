const t="08-objects-advanced-objects-13",e="Writable Property",o=`const obj = {x: 10};
Object.defineProperty(obj, 'x', {writable: false});
obj.x = 20;
console.log(obj.x);`,s=`const obj = {x: 10};
Object.defineProperty(obj, 'x', {writable: false});
obj.x = 20;
console.log(obj.x);`,n=[{input:[],expected:"10"}],c=["writable: false","Assignment fails silently"],l={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{l as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
