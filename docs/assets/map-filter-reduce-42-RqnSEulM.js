const r="07-arrays-map-filter-reduce-42",t="Reduce Concat",a=`const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const result = [arr1, arr2, arr3].____((acc, arr) => acc.concat(arr), []);
console.log(result);`,c=`const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const result = [arr1, arr2, arr3].reduce((acc, arr) => acc.concat(arr), []);
console.log(result);`,n=[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],s=["Concat each sub-array","Flatten arrays"],o={id:r,title:t,starterCode:a,solution:c,tests:n,hints:s};export{o as default,s as hints,r as id,c as solution,a as starterCode,n as tests,t as title};
