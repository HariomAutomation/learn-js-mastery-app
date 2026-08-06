const e="08-objects-object-basics-10",t="Object Freeze",o=`const obj = {name: 'Alice'};
Object.freeze(obj);
obj.name = 'Bob';
console.log(obj.name);`,n=`const obj = {name: 'Alice'};
Object.freeze(obj);
obj.name = 'Bob';
console.log(obj.name);`,s=[{input:[],expected:"Alice"}],c=["Freeze prevents changes","Assignment fails silently"],b={id:e,title:t,starterCode:o,solution:n,tests:s,hints:c};export{b as default,c as hints,e as id,n as solution,o as starterCode,s as tests,t as title};
