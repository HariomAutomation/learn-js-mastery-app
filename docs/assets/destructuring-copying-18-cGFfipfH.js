const t="08-objects-destructuring-copying-18",e="Merge Practice",s=`const defaults = {color: 'red', size: 'medium', weight: 'light'};
const custom = {size: 'large', weight: 'heavy'};
const result = {...defaults, ...custom};
console.log(result);`,o=`const defaults = {color: 'red', size: 'medium', weight: 'light'};
const custom = {size: 'large', weight: 'heavy'};
const result = {...defaults, ...custom};
console.log(result);`,c=[{input:[],expected:"{ color: 'red', size: 'large', weight: 'heavy' }"}],i=["Override specific keys","Spread merge"],n={id:t,title:e,starterCode:s,solution:o,tests:c,hints:i};export{n as default,i as hints,t as id,o as solution,s as starterCode,c as tests,e as title};
