const n="05-loops-for-of-for-in-34",t="For...Of With Set Size",o=`const nums = new Set([1, 2, 2, 3, 3, 3]);
let count = 0;
for (const n of nums) {
  count++;
}
console.log(count);`,s=`const nums = new Set([1, 2, 2, 3, 3, 3]);
let count = 0;
for (const n of nums) {
  count++;
}
console.log(count);`,e=[{input:[],expected:"3"}],c=["Count unique elements","Set removes duplicates"],u={id:n,title:t,starterCode:o,solution:s,tests:e,hints:c};export{u as default,c as hints,n as id,s as solution,o as starterCode,e as tests,t as title};
