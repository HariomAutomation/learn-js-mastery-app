const t="07-arrays-array-methods-25",s="Concat",r=`const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.____(arr2);
console.log(result);`,o=`const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.concat(arr2);
console.log(result);`,n=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],a=["concat merges arrays","Does not mutate originals"],e={id:t,title:s,starterCode:r,solution:o,tests:n,hints:a};export{e as default,a as hints,t as id,o as solution,r as starterCode,n as tests,s as title};
