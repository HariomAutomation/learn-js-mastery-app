const n="05-loops-for-of-for-in-46",t="For...Of Range",r=`function range(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
for (const num of range(3, 7)) {
  console.log(num);
}`,o=`function range(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
for (const num of range(3, 7)) {
  console.log(num);
}`,e=[{input:[],expected:`3
4
5
6
7`}],s=["Create range array","Iterate with for...of"],a={id:n,title:t,starterCode:r,solution:o,tests:e,hints:s};export{a as default,s as hints,n as id,o as solution,r as starterCode,e as tests,t as title};
