const n="05-loops-for-of-for-in-45",t="For...Of Generator",o=`function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
for (const num of range(1, 5)) {
  console.log(num);
}`,e=`function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
for (const num of range(1, 5)) {
  console.log(num);
}`,s=[{input:[],expected:`1
2
3
4
5`}],r=["Generator yields values","for...of works with generators"],i={id:n,title:t,starterCode:o,solution:e,tests:s,hints:r};export{i as default,r as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
