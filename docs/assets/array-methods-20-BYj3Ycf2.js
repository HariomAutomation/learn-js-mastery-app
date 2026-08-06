const t="07-arrays-array-methods-20",o="Sort Numbers",r=`const arr = [3, 1, 4, 1, 5];
arr.____((a, b) => a - b);
console.log(arr);`,s=`const arr = [3, 1, 4, 1, 5];
arr.sort((a, b) => a - b);
console.log(arr);`,n=[{input:[],expected:"[ 1, 1, 3, 4, 5 ]"}],a=["Sort needs compare function","a - b for ascending"],e={id:t,title:o,starterCode:r,solution:s,tests:n,hints:a};export{e as default,a as hints,t as id,s as solution,r as starterCode,n as tests,o as title};
