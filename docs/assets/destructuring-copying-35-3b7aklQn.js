const t="08-objects-destructuring-copying-35",e="Rest in for-of",o=`const arr = [{type: 'a', val: 1, extra: 'x'}, {type: 'b', val: 2, extra: 'y'}];
for (const {type, ...rest} of arr) {
  console.log(type, rest);
}`,s=`const arr = [{type: 'a', val: 1, extra: 'x'}, {type: 'b', val: 2, extra: 'y'}];
for (const {type, ...rest} of arr) {
  console.log(type, rest);
}`,n=[{input:[],expected:`a { val: 1, extra: 'x' }
b { val: 2, extra: 'y' }`}],r=["Rest in loop destructuring","Collect remaining props"],a={id:t,title:e,starterCode:o,solution:s,tests:n,hints:r};export{a as default,r as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
