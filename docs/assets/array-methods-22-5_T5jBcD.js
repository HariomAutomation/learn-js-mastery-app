const t="07-arrays-array-methods-22",s="Fill",r=`const arr = [1, 2, 3, 4, 5];
arr.____(0, 1, 4);
console.log(arr);`,o=`const arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4);
console.log(arr);`,n=[{input:[],expected:"[ 1, 0, 0, 0, 5 ]"}],e=["fill(value, start, end)","Fills range with value"],a={id:t,title:s,starterCode:r,solution:o,tests:n,hints:e};export{a as default,e as hints,t as id,o as solution,r as starterCode,n as tests,s as title};
