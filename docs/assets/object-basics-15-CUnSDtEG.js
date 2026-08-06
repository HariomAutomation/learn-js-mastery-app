const t="08-objects-object-basics-15",s="Object Is",e=`console.log(Object.is(25, 25));
console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));`,o=`console.log(Object.is(25, 25));
console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));`,c=[{input:[],expected:`true
true
false`}],n=["Object.is strict equality","NaN === NaN in Object.is"],i={id:t,title:s,starterCode:e,solution:o,tests:c,hints:n};export{i as default,n as hints,t as id,o as solution,e as starterCode,c as tests,s as title};
