const n="05-loops-for-of-for-in-29",o="Array Find For...Of",t=`const arr = [1, 5, 8, 12, 3];
for (const num of arr) {
  if (num > 10) {
    console.log(num);
    break;
  }
}`,r=`const arr = [1, 5, 8, 12, 3];
for (const num of arr) {
  if (num > 10) {
    console.log(num);
    break;
  }
}`,s=[{input:[],expected:"12"}],e=["Check condition","Break when found"],c={id:n,title:o,starterCode:t,solution:r,tests:s,hints:e};export{c as default,e as hints,n as id,r as solution,t as starterCode,s as tests,o as title};
