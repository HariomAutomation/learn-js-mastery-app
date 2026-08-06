const t="07-arrays-array-methods-29",o="CopyWithin",r=`const arr = [1, 2, 3, 4, 5];
arr.____(0, 3);
console.log(arr);`,s=`const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr);`,n=[{input:[],expected:"[ 4, 5, 3, 4, 5 ]"}],a=["copyWithin(target, start)","Copies within array"],e={id:t,title:o,starterCode:r,solution:s,tests:n,hints:a};export{e as default,a as hints,t as id,s as solution,r as starterCode,n as tests,o as title};
