const o="05-loops-for-of-for-in-24",e="Set Iteration",t=`const colors = new Set(['red', 'green', 'blue']);
for (const color of colors) {
  console.log(color);
}`,n=`const colors = new Set(['red', 'green', 'blue']);
for (const color of colors) {
  console.log(color);
}`,s=[{input:[],expected:`red
green
blue`}],r=["Set iterates values","Order preserved"],c={id:o,title:e,starterCode:t,solution:n,tests:s,hints:r};export{c as default,r as hints,o as id,n as solution,t as starterCode,s as tests,e as title};
