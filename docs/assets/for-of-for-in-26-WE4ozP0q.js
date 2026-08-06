const o="05-loops-for-of-for-in-26",t="Key Value Pair",e=`const obj = {name: 'Bob', job: 'dev'};
for (const [k, v] of Object.entries(obj)) {
  console.log(k + ' = ' + v);
}`,n=`const obj = {name: 'Bob', job: 'dev'};
for (const [k, v] of Object.entries(obj)) {
  console.log(k + ' = ' + v);
}`,s=[{input:[],expected:`name = Bob
job = dev`}],r=["Destructure entries","Format output"],c={id:o,title:t,starterCode:e,solution:n,tests:s,hints:r};export{c as default,r as hints,o as id,n as solution,e as starterCode,s as tests,t as title};
