const t="07-arrays-array-methods-40",o="Fill Start End",s=`const arr = [0, 0, 0, 0, 0];
arr.____(7, 2, 4);
console.log(arr);`,r=`const arr = [0, 0, 0, 0, 0];
arr.fill(7, 2, 4);
console.log(arr);`,n=[{input:[],expected:"[ 0, 0, 7, 7, 0 ]"}],e=["Fill from index 2 to 4","End index exclusive"],a={id:t,title:o,starterCode:s,solution:r,tests:n,hints:e};export{a as default,e as hints,t as id,r as solution,s as starterCode,n as tests,o as title};
