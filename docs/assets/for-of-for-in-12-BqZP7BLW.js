const o="05-loops-for-of-for-in-12",n="For...In HasOwnProperty",t=`const obj = {a: 1};
obj.b = 2;
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}`,s=`const obj = {a: 1};
obj.b = 2;
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}`,e=[{input:[],expected:`a
b`}],r=["hasOwnProperty checks own keys","Filters out inherited"],i={id:o,title:n,starterCode:t,solution:s,tests:e,hints:r};export{i as default,r as hints,o as id,s as solution,t as starterCode,e as tests,n as title};
