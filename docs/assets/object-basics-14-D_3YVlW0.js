const o="08-objects-object-basics-14",e="Has Own Property",t=`const obj = {name: 'Alice', age: 25};
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('email'));`,s=`const obj = {name: 'Alice', age: 25};
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('email'));`,n=[{input:[],expected:`true
false`}],c=["hasOwnProperty checks","Returns boolean"],a={id:o,title:e,starterCode:t,solution:s,tests:n,hints:c};export{a as default,c as hints,o as id,s as solution,t as starterCode,n as tests,e as title};
