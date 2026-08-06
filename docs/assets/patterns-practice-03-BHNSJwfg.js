const t="05-loops-patterns-practice-03",o="Reverse Number Pattern",n=`for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,e=`for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,r=[{input:[],expected:`12345
1234
123
12
1`}],s=["Decrement outer loop","Count down"],i={id:t,title:o,starterCode:n,solution:e,tests:r,hints:s};export{i as default,s as hints,t as id,e as solution,n as starterCode,r as tests,o as title};
