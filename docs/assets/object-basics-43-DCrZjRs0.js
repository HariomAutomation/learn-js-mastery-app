const t="08-objects-object-basics-43",e="Complete 6",s=`const obj = {a: 1, b: 2, c: 3};
const entries = Object.entries(obj);
const max = entries.reduce((a, b) => a[1] > b[1] ? a : b);
console.log(max);`,o=`const obj = {a: 1, b: 2, c: 3};
const entries = Object.entries(obj);
const max = entries.reduce((a, b) => a[1] > b[1] ? a : b);
console.log(max);`,n=[{input:[],expected:"[ 'c', 3 ]"}],c=["Find max value entry","Compare values"],a={id:t,title:e,starterCode:s,solution:o,tests:n,hints:c};export{a as default,c as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
