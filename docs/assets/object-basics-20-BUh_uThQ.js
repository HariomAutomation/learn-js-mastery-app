const e="08-objects-object-basics-20",t="Merge Objects",s=`const defaults = {color: 'red', size: 'medium'};
const custom = {size: 'large', weight: 'heavy'};
const result = {...defaults, ...custom};
console.log(result);`,o=`const defaults = {color: 'red', size: 'medium'};
const custom = {size: 'large', weight: 'heavy'};
const result = {...defaults, ...custom};
console.log(result);`,c=[{input:[],expected:"{ color: 'red', size: 'large', weight: 'heavy' }"}],n=["Spread merge","Custom overrides defaults"],l={id:e,title:t,starterCode:s,solution:o,tests:c,hints:n};export{l as default,n as hints,e as id,o as solution,s as starterCode,c as tests,t as title};
