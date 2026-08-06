const t="07-arrays-array-methods-39",r="Sort Descending",o=`const arr = [5, 2, 8, 1, 9];
arr.____((a, b) => b - a);
console.log(arr);`,s=`const arr = [5, 2, 8, 1, 9];
arr.sort((a, b) => b - a);
console.log(arr);`,e=[{input:[],expected:"[ 9, 8, 5, 2, 1 ]"}],n=["b - a for descending","Reverse compare order"],a={id:t,title:r,starterCode:o,solution:s,tests:e,hints:n};export{a as default,n as hints,t as id,s as solution,o as starterCode,e as tests,r as title};
