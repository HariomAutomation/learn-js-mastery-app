const t="07-arrays-array-methods-02",o="Pop Element",s=`const arr = [1, 2, 3];
const last = arr.____();
console.log(last);
console.log(arr);`,e=`const arr = [1, 2, 3];
const last = arr.pop();
console.log(last);
console.log(arr);`,n=[{input:[],expected:`3
[ 1, 2 ]`}],r=["pop removes last element","Returns removed element"],a={id:t,title:o,starterCode:s,solution:e,tests:n,hints:r};export{a as default,r as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
