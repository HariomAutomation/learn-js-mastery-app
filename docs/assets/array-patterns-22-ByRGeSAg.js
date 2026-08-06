const t="07-arrays-array-patterns-22",n="Unique Filter",e=`const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = arr.filter((v, i, a) => a.indexOf(v) === i);
console.log(unique);`,s=`const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = arr.filter((v, i, a) => a.indexOf(v) === i);
console.log(unique);`,r=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],i=["Check first occurrence","indexOf equals index"],o={id:t,title:n,starterCode:e,solution:s,tests:r,hints:i};export{o as default,i as hints,t as id,s as solution,e as starterCode,r as tests,n as title};
