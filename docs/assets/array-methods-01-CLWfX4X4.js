const t="07-arrays-array-methods-01",s="Push Element",o=`const arr = [1, 2, 3];
arr.____(4);
console.log(arr);`,r=`const arr = [1, 2, 3];
arr.push(4);
console.log(arr);`,n=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],a=["push adds to end","Mutates original array"],e={id:t,title:s,starterCode:o,solution:r,tests:n,hints:a};export{e as default,a as hints,t as id,r as solution,o as starterCode,n as tests,s as title};
