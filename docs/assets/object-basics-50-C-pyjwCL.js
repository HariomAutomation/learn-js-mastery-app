const s="08-objects-object-basics-50",e="Spread Override",t=`const defaults = {color: 'red', size: 'medium'};
const custom = {size: 'large'};
const result = {...defaults, ...custom};
console.log(result.color, result.size);`,o=`const defaults = {color: 'red', size: 'medium'};
const custom = {size: 'large'};
const result = {...defaults, ...custom};
console.log(result.color, result.size);`,c=[{input:[],expected:"red large"}],r=["Spread merge","Override specific"],l={id:s,title:e,starterCode:t,solution:o,tests:c,hints:r};export{l as default,r as hints,s as id,o as solution,t as starterCode,c as tests,e as title};
