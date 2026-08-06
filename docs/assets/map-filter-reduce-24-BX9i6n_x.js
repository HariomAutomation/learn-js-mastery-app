const t="07-arrays-map-filter-reduce-24",e="Map Capitalize",o=`const words = ['hello', 'world'];
const capitalized = words.____(w => w[0].toUpperCase() + w.slice(1));
console.log(capitalized);`,s=`const words = ['hello', 'world'];
const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1));
console.log(capitalized);`,l=[{input:[],expected:"[ 'Hello', 'World' ]"}],i=["Capitalize first letter","Concat rest of string"],a={id:t,title:e,starterCode:o,solution:s,tests:l,hints:i};export{a as default,i as hints,t as id,s as solution,o as starterCode,l as tests,e as title};
