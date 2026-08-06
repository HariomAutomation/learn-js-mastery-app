const o="05-loops-for-of-for-in-08",t="Object.entries()",e=`const obj = {x: 1, y: 2};
for (const [key, val] of Object.entries(obj)) {
  console.log(key + '=' + val);
}`,n=`const obj = {x: 1, y: 2};
for (const [key, val] of Object.entries(obj)) {
  console.log(key + '=' + val);
}`,s=[{input:[],expected:`x=1
y=2`}],r=["Object.entries() returns [key, value] pairs","Use with for...of"],c={id:o,title:t,starterCode:e,solution:n,tests:s,hints:r};export{c as default,r as hints,o as id,n as solution,e as starterCode,s as tests,t as title};
