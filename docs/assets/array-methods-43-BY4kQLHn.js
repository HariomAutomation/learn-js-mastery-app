const o="07-arrays-array-methods-43",s="Method Return Values",t=`const arr = [1, 2, 3];
const popped = arr.pop();
const pushed = arr.____(4);
console.log(popped);
console.log(pushed);`,e=`const arr = [1, 2, 3];
const popped = arr.pop();
const pushed = arr.push(4);
console.log(popped);
console.log(pushed);`,n=[{input:[],expected:`3
4`}],r=["pop returns removed","push returns new length"],p={id:o,title:s,starterCode:t,solution:e,tests:n,hints:r};export{p as default,r as hints,o as id,e as solution,t as starterCode,n as tests,s as title};
