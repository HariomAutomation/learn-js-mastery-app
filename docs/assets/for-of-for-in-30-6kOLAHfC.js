const o="05-loops-for-of-for-in-30",t="Map Size",n=`const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
let count = 0;
for (const [k, v] of map) {
  count++;
}
console.log(count);`,s=`const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
let count = 0;
for (const [k, v] of map) {
  count++;
}
console.log(count);`,c=[{input:[],expected:"3"}],e=["Count iterations","Map.size also works"],a={id:o,title:t,starterCode:n,solution:s,tests:c,hints:e};export{a as default,e as hints,o as id,s as solution,n as starterCode,c as tests,t as title};
