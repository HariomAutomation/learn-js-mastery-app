const r="07-arrays-array-methods-42",t="Mutable vs Immutable",s=`const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.____(4);
console.log(arr1 === arr2);`,e=`const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1 === arr2);`,n=[{input:[],expected:"true"}],o=["Assignment copies reference","Same array in memory"],a={id:r,title:t,starterCode:s,solution:e,tests:n,hints:o};export{a as default,o as hints,r as id,e as solution,s as starterCode,n as tests,t as title};
