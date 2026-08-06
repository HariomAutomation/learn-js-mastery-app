const t="07-arrays-array-methods-17",s="FlatMap",a=`const arr = [1, 2, 3];
console.log(arr.____(x => [x, x * 2]));`,o=`const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2]));`,r=[{input:[],expected:"[ 1, 2, 2, 4, 3, 6 ]"}],n=["flatMap maps then flattens","Callback returns array"],e={id:t,title:s,starterCode:a,solution:o,tests:r,hints:n};export{e as default,n as hints,t as id,o as solution,a as starterCode,r as tests,s as title};
