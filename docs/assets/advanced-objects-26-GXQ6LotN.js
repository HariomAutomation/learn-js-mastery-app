const t="08-objects-advanced-objects-26",e="structuredClone Advanced",o=`const obj = {date: new Date(), regexp: /test/g, data: [1, 2, 3]};
const copy = structuredClone(obj);
copy.data.push(4);
console.log(obj.data);`,s=`const obj = {date: new Date(), regexp: /test/g, data: [1, 2, 3]};
const copy = structuredClone(obj);
copy.data.push(4);
console.log(obj.data);`,n=[{input:[],expected:"[ 1, 2, 3 ]"}],c=["structuredClone deep copies","Original untouched"],a={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{a as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
