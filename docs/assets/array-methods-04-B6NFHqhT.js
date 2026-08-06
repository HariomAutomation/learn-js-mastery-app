const t="07-arrays-array-methods-04",s="Unshift Element",n=`const arr = [2, 3, 4];
arr.____(1);
console.log(arr);`,o=`const arr = [2, 3, 4];
arr.unshift(1);
console.log(arr);`,r=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],a=["unshift adds to beginning","Mutates original array"],e={id:t,title:s,starterCode:n,solution:o,tests:r,hints:a};export{e as default,a as hints,t as id,o as solution,n as starterCode,r as tests,s as title};
