const e="07-arrays-array-patterns-36",t="Zip Objects",s=`const keys = ['name', 'age', 'city'];
const vals = ['Alice', 25, 'NYC'];
const obj = keys.reduce((acc, key, i) => ({ ...acc, [key]: vals[i] }), {});
console.log(obj);`,c=`const keys = ['name', 'age', 'city'];
const vals = ['Alice', 25, 'NYC'];
const obj = keys.reduce((acc, key, i) => ({ ...acc, [key]: vals[i] }), {});
console.log(obj);`,o=[{input:[],expected:"{ name: 'Alice', age: 25, city: 'NYC' }"}],n=["Reduce to object","Pair keys with values"],a={id:e,title:t,starterCode:s,solution:c,tests:o,hints:n};export{a as default,n as hints,e as id,c as solution,s as starterCode,o as tests,t as title};
