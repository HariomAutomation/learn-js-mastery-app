const o="05-loops-for-of-for-in-19",t="For...In Skip Prototype",n=`const obj = {a: 1, b: 2};
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ':' + obj[key]);
  }
}`,e=`const obj = {a: 1, b: 2};
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ':' + obj[key]);
  }
}`,s=[{input:[],expected:`a:1
b:2`}],r=["hasOwnProperty filters prototypes","Safe way to iterate"],i={id:o,title:t,starterCode:n,solution:e,tests:s,hints:r};export{i as default,r as hints,o as id,e as solution,n as starterCode,s as tests,t as title};
