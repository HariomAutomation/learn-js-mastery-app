const o="05-loops-for-of-for-in-03",t="For...Of Maps",e=`const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key + ': ' + value);
}`,n=`const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key + ': ' + value);
}`,s=[{input:[],expected:`a: 1
b: 2`}],a=["Map entries are [key, value]","Destructure in loop"],l={id:o,title:t,starterCode:e,solution:n,tests:s,hints:a};export{l as default,a as hints,o as id,n as solution,e as starterCode,s as tests,t as title};
