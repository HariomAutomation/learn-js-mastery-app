const t="08-objects-object-basics-07",e="Object Entries",s=`const obj = {x: 10, y: 20};
const entries = Object.entries(____);
console.log(entries);`,n=`const obj = {x: 10, y: 20};
const entries = Object.entries(obj);
console.log(entries);`,o=[{input:[],expected:"[ [ 'x', 10 ], [ 'y', 20 ] ]"}],c=["Object.entries returns","Array of [key, value] pairs"],i={id:t,title:e,starterCode:s,solution:n,tests:o,hints:c};export{i as default,c as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
