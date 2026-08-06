const t="07-arrays-array-methods-45",n="Flat Depth Infinity",s=`const arr = [[1, [2, [3, [4]]]]];
console.log(arr.____(Infinity));`,e=`const arr = [[1, [2, [3, [4]]]]];
console.log(arr.flat(Infinity));`,o=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],a=["Infinity flattens all levels","Fully flattens nested"],l={id:t,title:n,starterCode:s,solution:e,tests:o,hints:a};export{l as default,a as hints,t as id,e as solution,s as starterCode,o as tests,n as title};
