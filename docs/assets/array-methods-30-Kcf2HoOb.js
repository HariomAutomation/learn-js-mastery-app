const t="07-arrays-array-methods-30",s="Flat Depth 2",o=`const arr = [[1, [2]], [3, [4, [5]]]];
console.log(arr.____(2));`,e=`const arr = [[1, [2]], [3, [4, [5]]]];
console.log(arr.flat(2));`,a=[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],n=["Pass depth to flat()","Depth 2 flattens two levels"],r={id:t,title:s,starterCode:o,solution:e,tests:a,hints:n};export{r as default,n as hints,t as id,e as solution,o as starterCode,a as tests,s as title};
